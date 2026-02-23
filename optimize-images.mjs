import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');
const outputDir = path.join(__dirname, 'public', 'images', 'optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const optimizeImage = async (filename) => {
  const inputPath = path.join(imagesDir, filename);
  const outputPath = path.join(outputDir, filename.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
  
  try {
    const stats = fs.statSync(inputPath);
    const fileSizeInKB = stats.size / 1024;
    
    // Only optimize if file is larger than 50KB
    if (fileSizeInKB > 50) {
      await sharp(inputPath)
        .resize(1200, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      const newSizeInKB = newStats.size / 1024;
      const savings = ((fileSizeInKB - newSizeInKB) / fileSizeInKB * 100).toFixed(1);
      
      console.log(`✓ ${filename}: ${fileSizeInKB.toFixed(0)}KB → ${newSizeInKB.toFixed(0)}KB (${savings}% saved)`);
    }
  } catch (error) {
    console.error(`✗ Error optimizing ${filename}:`, error.message);
  }
};

const processImages = async () => {
  const files = fs.readdirSync(imagesDir);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file) && !file.startsWith('.')
  );
  
  console.log(`Optimizing ${imageFiles.length} images...\n`);
  
  for (const file of imageFiles) {
    await optimizeImage(file);
  }
  
  console.log('\n✓ Image optimization complete!');
};

processImages();
