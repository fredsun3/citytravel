import { useState } from 'react';
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

  const variantClass = variant === 'cover' ? 'lazy-img-cover' : 'lazy-img-contain';

  return (
    <div
      className={`lazy-img-container ${className} ${variantClass} ${loaded ? 'loaded' : ''}`}
    >
      {!loaded && <div className="lazy-img-placeholder" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`lazy-img ${loaded ? 'fade-in' : ''}`}
      />
    </div>
  );
}

export default LazyImage;
