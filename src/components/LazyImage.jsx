import { useState, useRef, useEffect } from 'react';
import './LazyImage.css';

/**
 * LazyImage - 图片组件，支持优先级区分首屏与滚动加载。
 *
 * 占位策略：灰色 shimmer 放在容器背景层，图片始终 opacity:1。
 *
 * 加载策略（priority 参数）：
 * - 'high'：首屏图片（hero、首页足迹卡片），eager + fetchpriority=high
 * - 'low'（默认）：详情页滚动内容，loading=lazy 按需加载
 *   避免进入详情页时 10+ 图片同时下载抢带宽
 *
 * 保障机制：缓存检测、解码失败重试、onError 重试、超时重试（最多3次）
 */
function LazyImage({ src, alt = '', className = '', variant = 'cover', priority = 'low' }) {
  const [loaded, setLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [retrySrc, setRetrySrc] = useState(null);
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

  const variantClass = variant === 'cover' ? 'lazy-img-cover' : 'lazy-img-contain';
  const finalSrc = retrySrc || src;
  const isHigh = priority === 'high';

  return (
    <div className={`lazy-img-container ${className} ${variantClass} ${loaded ? 'loaded' : ''}`}>
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
    </div>
  );
}

export default LazyImage;
