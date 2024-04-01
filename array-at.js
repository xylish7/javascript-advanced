const colors = ["red", "green", "blue", "yellow", "pink"];

// Get the first element of the array
console.log(colors.at(0)); // red

// Get the last element of the array
console.log(colors.at(-1)); // pink

// Get the second last element of the array
console.log(colors.at(-2)); // yellow

// Get the element at index 10 (out of bounds)
console.log(colors.at(10)); // undefined
