function* evenNumbers() {
  let num = 0;
  while (true) {
    yield num;
    num += 2;
  }
}

const numbers = evenNumbers();
console.log(numbers.next().value); // 0
console.log(numbers.next().value); // 2
console.log(numbers.next().value); // 4
console.log(numbers.next().value); // 6

console.log("\n");

// Generator function to get a batch of images
function* getBatchOfImages(images, batchSize) {
  let index = 0;
  while (index < images.length) {
    yield images.slice(index, index + batchSize);
    index += batchSize;
  }
}

const allImages = Array.from({ length: 100 }, (_, i) => `image${i + 1}.jpg`);
const imageGenerator = getBatchOfImages(allImages, 10);
console.log("First batch of 10 images: ", imageGenerator.next().value); // ["image1.jpg", "image2.jpg", ..., "image10.jpg"]
console.log("Second batch of 10 images: ", imageGenerator.next().value); // ["image1.jpg", "image2.jpg", ..., "image10.jpg"]
