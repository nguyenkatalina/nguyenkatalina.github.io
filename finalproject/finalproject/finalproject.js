let img;

function preload() {
  img = loadImage("originalimages/me1.jpg");
}

function setup() {
  createCanvas(571, 800);
  pixelDensity(1); // Set pixel density to 1 for better performance
  img.resize(width, height);
  image(img, 0, 0);
  loadPixels();
  let roundingFactor = 20; // Change this value to adjust the pixel size
  for (let x = 0; x < width; x += roundingFactor) {
    for (let y = 0; y < height; y += roundingFactor) {
      let loc = (x + y * width) * 4;
      let r = pixels[loc];
      let g = pixels[loc + 1];
      let b = pixels[loc + 2];
      let a = pixels[loc + 3];
      for (let i = 0; i < roundingFactor; i++) {
        for (let j = 0; j < roundingFactor; j++) {
          let index = ((x + i) + (y + j) * width) * 4;
          pixels[index] = r;
          pixels[index + 1] = g;
          pixels[index + 2] = b;
          pixels[index + 3] = a;
        }
      }
    }
  }
  updatePixels();
}
