import { useState, useRef, useEffect } from 'react';
import './LazyImage.css';

/**
 * LazyImage - IntersectionObserver based lazy-loading image component.
 * Renders a lightweight placeholder (gradient shimmer) until the image
 * enters the viewport, then loads the actual image with a fade-in.
 *
 * Usage:
 *   <LazyImage src={myImage} alt="description" className="my-class" />
 *   <LazyImage src={myImage} alt="description" variant="cover" />
 */
function LazyImage({ src, alt = '', className = '', variant = 'cover' }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    // If IntersectionObserver is not available, load immediately
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '200px' } // Start loading 200px before entering viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass = variant === 'cover' ? 'lazy-img-cover' : 'lazy-img-contain';

  return (
    <div
      ref={imgRef}
      className={`lazy-img-container ${className} ${variantClass} ${loaded ? 'loaded' : ''}`}
    >
      {inView ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`lazy-img ${loaded ? 'fade-in' : ''}`}
        />
      ) : (
        <div className="lazy-img-placeholder" />
      )}
    </div>
  );
}

export default LazyImage;
