import { useState, useRef, useEffect } from 'react';
import './LazyImage.css';

/**
 * LazyImage - Image component using browser-native lazy loading.
 * Uses loading="lazy" for deferred loading and decoding="async" for
 * non-blocking decode. Shows a shimmer placeholder until loaded,
 * then fades in the image.
 *
 * This replaces the previous IntersectionObserver-based approach which
 * was unreliable on GitHub Pages (images below the fold never triggered).
 *
 * Usage:
 *   <LazyImage src={myImage} alt="description" className="my-class" />
 */
function LazyImage({ src, alt = '', className = '', variant = 'cover' }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  // 修复缓存图片不触发 onLoad 的 bug：
  // 浏览器对已缓存图片会同步加载完成，React 挂载 onLoad 处理器前
  // 事件早已触发，导致 loaded 永远为 false，图片一直显示灰色占位。
  // 这里在挂载后检测 img.complete，若已加载完成则直接置为已加载。
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  const variantClass = variant === 'cover' ? 'lazy-img-cover' : 'lazy-img-contain';

  return (
    <div
      className={`lazy-img-container ${className} ${variantClass} ${loaded ? 'loaded' : ''}`}
    >
      {!loaded && <div className="lazy-img-placeholder" />}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`lazy-img ${loaded ? 'fade-in' : ''}`}
      />
    </div>
  );
}

export default LazyImage;
