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
 * 2. 加载超时重试：8 秒未加载完成则追加 cache-busting 参数重试一次
 * 3. 兜底 onError：加载失败也停止 shimmer（避免永久转圈）
 *
 * Usage:
 *   <LazyImage src={myImage} alt="description" className="my-class" />
 */
function LazyImage({ src, alt = '', className = '', variant = 'cover' }) {
  const [loaded, setLoaded] = useState(false);
  const [retrySrc, setRetrySrc] = useState(null);
  const imgRef = useRef(null);
  const retryTimer = useRef(null);

  // 缓存图片检测：onLoad 对缓存图片可能不触发
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src, retrySrc]);

  // 加载超时重试：8 秒未完成则加 cache-busting 参数重试一次
  useEffect(() => {
    setLoaded(false);
    retryTimer.current = setTimeout(() => {
      if (imgRef.current && (!imgRef.current.complete || imgRef.current.naturalWidth === 0)) {
        setRetrySrc(src + (src.includes('?') ? '&' : '?') + '_r=1');
      }
    }, 8000);
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
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className="lazy-img"
      />
    </div>
  );
}

export default LazyImage;
