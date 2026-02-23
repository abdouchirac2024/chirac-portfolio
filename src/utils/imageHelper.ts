/**
 * Get optimized image path (WebP format)
 * Falls back to original if optimized version doesn't exist
 */
export const getOptimizedImage = (imagePath: string): string => {
  if (!imagePath) return '';
  
  // Check if it's already an optimized path
  if (imagePath.includes('/optimized/')) {
    return imagePath;
  }
  
  // Convert to WebP optimized path
  const webpPath = imagePath
    .replace(/\.(png|jpg|jpeg)$/i, '.webp')
    .replace('/images/', '/images/optimized/');
  
  return webpPath;
};

/**
 * Get image with fallback support
 */
export const getImageWithFallback = (imagePath: string) => {
  const optimized = getOptimizedImage(imagePath);
  return {
    src: optimized,
    fallback: imagePath,
  };
};
