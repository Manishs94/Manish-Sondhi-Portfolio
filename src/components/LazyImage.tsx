
import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  sizes?: string;
  srcSet?: string;
  priority?: boolean;
  quality?: number;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlmYTZiMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  onLoad,
  onError,
  sizes,
  srcSet,
  priority = false,
  quality = 75
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [loadStartTime, setLoadStartTime] = useState<number>(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setLoadStartTime(performance.now());
          observerRef.current?.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start loading 50px before the image enters viewport
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    
    // Track image load performance
    if (loadStartTime && typeof window !== 'undefined' && window.gtag) {
      const loadTime = performance.now() - loadStartTime;
      window.gtag('event', 'image_load_time', {
        event_category: 'performance',
        value: Math.round(loadTime),
        custom_parameter: src
      });
    }
    
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    
    // Track image load errors
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'image_load_error', {
        event_category: 'error',
        custom_parameter: src
      });
    }
    
    onError?.();
  };

  // Generate optimized image URLs based on device capabilities
  const getOptimizedSrc = (originalSrc: string) => {
    // For production, you would typically use a service like Cloudinary or ImageKit
    // For now, we'll return the original src
    return originalSrc;
  };

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Placeholder with better visual feedback */}
      {!isLoaded && !hasError && (
        <img
          src={placeholder}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          loading="eager"
        />
      )}
      
      {/* Actual Image with progressive enhancement */}
      {isInView && (
        <img
          src={getOptimizedSrc(src)}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          sizes={sizes}
          srcSet={srcSet}
          style={{
            contentVisibility: 'auto',
            containIntrinsicSize: '300px 200px'
          }}
        />
      )}
      
      {/* Enhanced Error State */}
      {hasError && (
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
          role="alert"
          aria-live="polite"
        >
          <svg 
            className="w-8 h-8 mb-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" 
            />
          </svg>
          <span className="text-sm font-medium">Failed to load image</span>
          <span className="text-xs mt-1 text-center px-2">{alt}</span>
        </div>
      )}
      
      {/* Loading Animation with accessibility */}
      {!isLoaded && !hasError && isInView && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
          role="status"
          aria-live="polite"
          aria-label="Loading image"
        >
          <div className="w-8 h-8 border-2 border-portfolio-accent border-t-transparent rounded-full animate-spin" />
          <span className="sr-only">Loading image: {alt}</span>
        </div>
      )}
    </div>
  );
};

// Higher-order component for critical images
export const CriticalImage: React.FC<LazyImageProps> = (props) => {
  return <LazyImage {...props} priority={true} />;
};

// Component for responsive images with automatic sizing
export const ResponsiveImage: React.FC<LazyImageProps & { 
  breakpoints?: { [key: string]: string } 
}> = ({ breakpoints, ...props }) => {
  const defaultBreakpoints = {
    '(max-width: 640px)': '100vw',
    '(max-width: 1024px)': '50vw',
    '(max-width: 1280px)': '33vw',
    default: '25vw'
  };

  const responsiveSizes = breakpoints || defaultBreakpoints;
  const sizesString = Object.entries(responsiveSizes)
    .filter(([key]) => key !== 'default')
    .map(([query, size]) => `${query} ${size}`)
    .join(', ') + `, ${responsiveSizes.default || '100vw'}`;

  return <LazyImage {...props} sizes={sizesString} />;
};
