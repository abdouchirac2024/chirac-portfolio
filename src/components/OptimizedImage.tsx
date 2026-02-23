import React, { useState } from 'react';
import { getOptimizedImage } from '@/utils/imageHelper';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(getOptimizedImage(src));

  const handleError = () => {
    // Fallback to original image if WebP fails
    if (currentSrc !== src) {
      setCurrentSrc(src);
    } else {
      setError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse" />
      )}
      <img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
      />
    </div>
  );
};

export default OptimizedImage;
