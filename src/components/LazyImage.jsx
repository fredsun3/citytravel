import { useState, useRef, useEffect } from 'react';
import './LazyImage.css';

/**
 * LazyImage - 图片组件，支持优先级区分首屏与滚动加载 + 双击查看大图。
 *
 * 占位策略：灰色 shimmer 放在容器背景层，图片始终 opacity:1。
 *
 * 加载策略（priority 参数）：
 * - 'high'：首屏图片（hero、首页足迹卡片），eager + fetchpriority=high
 * - 'low'（默认）：详情页滚动内容，loading=lazy 按需加载
 *
 * 大图预览（enableLightbox）：
 * - 为 true 时，双击图片弹出全屏大图弹窗
 * - 点击遮罩或按 ESC 关闭
 *
 * 保障机制：缓存检测、解码失败重试、onError 重试、超时重试（最多3次）
 */
function LazyImage({ src, alt = '', className = '', variant = 'cover', priority = 'low', enableLightbox = false }) {
  const [loaded, setLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [retrySrc, setRetrySrc] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const imgRef = useRef(null);
  const retryTimer = useRef(null);

  const buildRetryUrl = (url, count) =>
    url + (url.includes('?') ? '&' : '?') + '_r=' + count;

  const triggerRetry = () => {
    if (retryCount < 3) {
      const next = retryCount + 1;
      setRetryCount(next);
      setRetrySrc(buildRetryUrl(src, next));
      setLoaded(false);
    } else {
      setLoaded(true);
    }
  };

  // 缓存/解码失败检测
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    } else if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth === 0) {
      triggerRetry();
    }
  }, [src, retrySrc]);

  // 超时重试
  useEffect(() => {
    setLoaded(false);
    setRetryCount(0);
    setRetrySrc(null);
    retryTimer.current = setTimeout(() => {
      if (imgRef.current && (!imgRef.current.complete || imgRef.current.naturalWidth === 0)) {
        triggerRetry();
      }
    }, 2000);
    return () => clearTimeout(retryTimer.current);
  }, [src]);

  // ESC 关闭大图弹窗
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleEsc = (e) => { if (e.key === 'Escape') setLightboxOpen(false); };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  const variantClass = variant === 'cover' ? 'lazy-img-cover' : 'lazy-img-contain';
  const finalSrc = retrySrc || src;
  const isHigh = priority === 'high';

  return (
    <>
      <div
        className={`lazy-img-container ${className} ${variantClass} ${loaded ? 'loaded' : ''} ${enableLightbox ? 'lightbox-enabled' : ''}`}
        onDoubleClick={enableLightbox ? () => setLightboxOpen(true) : undefined}
      >
        <img
          ref={imgRef}
          src={finalSrc}
          alt={alt}
          loading={isHigh ? 'eager' : 'lazy'}
          decoding="async"
          fetchpriority={isHigh ? 'high' : 'auto'}
          onLoad={() => setLoaded(true)}
          onError={triggerRetry}
          className="lazy-img"
        />
        {enableLightbox && (
          <span
            className="lazy-img-zoom-btn"
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
          >🔍</span>
        )}
      </div>
      {lightboxOpen && (
        <div className="image-lightbox" onClick={() => setLightboxOpen(false)}>
          <img src={finalSrc} alt={alt} className="image-lightbox-img" />
          <span className="image-lightbox-close" onClick={() => setLightboxOpen(false)}>✕</span>
          {alt && <p className="image-lightbox-caption">{alt}</p>}
        </div>
      )}
    </>
  );
}

export default LazyImage;
