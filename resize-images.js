// resize-images.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "./dist/assets";
const outputDir = "./dist/assets/optimized";
const maxWidth = 728;
const maxHeight = 970;

// Create output folder if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  const isImage = [".webp", ".jpg", ".jpeg", ".png"].includes(ext);

  if (!isImage) return;

  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  sharp(inputPath)
    .resize({ width: maxWidth, height: maxHeight, fit: "inside" })
    .toFile(outputPath)
    .then(() => console.log(`✅ Resized: ${file}`))
    .catch(err => console.error(`❌ Error resizing ${file}:`, err));
});