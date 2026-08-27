import { useState, useRef, useEffect } from 'react';
import './LazyImage.css';

/**
 * LazyImage - 使用浏览器原生懒加载的图片组件。
 * loading="lazy" 延迟加载，decoding="async" 非阻塞解码。
 *
 * 占位策略：灰色 shimmer 动画放在容器背景层，图片始终 opacity:1
 * 叠在背景之上。图片未加载时透明、透出灰色 shimmer；加载完成后
 * 内容自然覆盖背景。这样即使 onLoad 事件未触发（缓存图片的经典
 * React 时序问题），图片一旦加载即可见，彻底杜绝「永久灰色占位」。
 * loaded 状态仅用于停止 shimmer 动画（美观），不影响图片可见性。
 *
 * Usage:
 *   <LazyImage src={myImage} alt="description" className="my-class" />
 */
function LazyImage({ src, alt = '', className = '', variant = 'cover' }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  // 检测已缓存/已完成的图片：onLoad 对缓存图片可能不触发，
  // 挂载后检查 img.complete 同步置为已加载（仅用于停止 shimmer）。
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  const variantClass = variant === 'cover' ? 'lazy-img-cover' : 'lazy-img-contain';

  return (
    <div className={`lazy-img-container ${className} ${variantClass} ${loaded ? 'loaded' : ''}`}>
      <img
        ref={imgRef}
        src={src}
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
