// resize-images.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const folders = [
  {
    input: "./src/assets/images/services",
    output: "./src/assets/images/services-optimized",
  },
  {
    input: "./src/assets/images/hero",
    output: "./src/assets/images/hero-optimized",
  }
];

const maxWidth = 728;
const maxHeight = 600;

folders.forEach(({ input, output }) => {
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }

  fs.readdirSync(input).forEach(file => {
    const ext = path.extname(file).toLowerCase();
    const isImage = [".webp", ".jpg", ".jpeg", ".png"].includes(ext);
    if (!isImage) return;

    const inputPath = path.join(input, file);
    const outputPath = path.join(output, file);

    sharp(inputPath)
      .resize({ width: maxWidth, height: maxHeight, fit: "inside" })
      .toFile(outputPath)
      .then(() => console.log(`✅ Resized: ${file} from ${input}`))
      .catch(err => console.error(`❌ Error resizing ${file}:`, err));
  });
});