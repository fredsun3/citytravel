import { useState, useRef, useEffect } from 'react';
import './LazyImage.css';

/**
 * LazyImage - 使用浏览器原生懒加载的图片组件。
 *
 * 占位策略：灰色 shimmer 动画放在容器背景层，图片始终 opacity:1
 * 叠在背景之上。图片未加载时透明、透出灰色 shimmer；加载完成后
 * 内容自然覆盖背景。
 *
 * 加载保障机制：
 * 1. 缓存图片检测：挂载后检查 img.complete，解决缓存图片 onLoad 不触发问题
 * 2. 加载失败立即重试：onError 或 naturalWidth=0 时加 cache-busting 重试
 * 3. 加载超时重试：2 秒未加载完成则追加 cache-busting 参数重试
 * 4. 最多重试 3 次，避免无限循环
 * 5. eager 加载：用户主动进入详情页查看，不延迟加载图片
 *
 * Usage:
 *   <LazyImage src={myImage} alt="description" className="my-class" />
 */
function LazyImage({ src, alt = '', className = '', variant = 'cover' }) {
  const [loaded, setLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [retrySrc, setRetrySrc] = useState(null);
  const imgRef = useRef(null);
  const retryTimer = useRef(null);

  // 构建重试 URL（追加 cache-busting 参数）
  const buildRetryUrl = (url, count) => {
    return url + (url.includes('?') ? '&' : '?') + '_r=' + count;
  };

  // 触发重试
  const triggerRetry = () => {
    if (retryCount < 3) {
      const next = retryCount + 1;
      setRetryCount(next);
      setRetrySrc(buildRetryUrl(src, next));
      setLoaded(false);
    } else {
      setLoaded(true); // 重试上限，停止 shimmer
    }
  };

  // 缓存图片检测：onLoad 对缓存图片可能不触发
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    } else if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth === 0) {
      // complete=true 但 naturalWidth=0：解码失败，立即重试
      triggerRetry();
    }
  }, [src, retrySrc]);

  // 加载超时重试：2 秒未完成则重试
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

  return (
    <div className={`lazy-img-container ${className} ${variantClass} ${loaded ? 'loaded' : ''}`}>
      <img
        ref={imgRef}
        src={finalSrc}
        alt={alt}
        loading="eager"
        decoding="async"
        fetchpriority="high"
        onLoad={() => setLoaded(true)}
        onError={triggerRetry}
        className="lazy-img"
      />
    </div>
  );
}

export default LazyImage;
