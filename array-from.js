// String to array
console.log("Array.from('hello'): ", Array.from("hello")); // ["h", "e", "l", "l", "o"]

// Set to array
console.log("Array.from(new Set([1, 2, 3, 3])): ", Array.from(new Set([1, 2, 3, 3]))); // [1, 2, 3]

// Node list to array. This is useful when you want to use array methods on a node list.
// const nodeList = document.querySelectorAll("p");
// Comment out the line below to avoid error in the console because document is not defined in Node.js
// console.log("Array.from(nodeList): ", Array.from(nodeList)); // [p, p, p, p]

// Apply a map function to each element in the array
console.log(
  "Array.from('123', x => x * 2): ",
  Array.from("123", (x) => x * 2),
); // [2, 4, 6]

// Generate an array of numbers from 1 to 5
console.log(
  "Array.from({ length: 5 }, (_, i) => i + 1): ",
  Array.from({ length: 5 }, (_, i) => i + 1),
); // [1, 2, 3, 4, 5]
