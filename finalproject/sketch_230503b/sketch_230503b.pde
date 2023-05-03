PImage img; // Declare a PImage variable to hold the image data

void setup() {
  size(500, 500); // Set the size of the canvas
  img = loadImage("nguyenkatalina.github.io/finalproject/selfportraitimage.jpg"); // Load the image from a file
}

void draw() {
  img.loadPixels(); // Load the pixels of the image for editing
  for (int x = 0; x < img.width; x++) { // Loop over each pixel in the image
    for (int y = 0; y < img.height; y++) {
      int loc = x + y * img.width; // Calculate the index of the current pixel
      // Get the color of the current pixel
      color pixelColor = img.pixels[loc];
      // Set the color of the current pixel to its inverse
      img.pixels[loc] = color(255 - red(pixelColor),
                              255 - green(pixelColor),
                              255 - blue(pixelColor));
    }
  }
  img.updatePixels(); // Update the image with the modified pixel data
  image(img, 0, 0); // Display the modified image on the canvas
}
