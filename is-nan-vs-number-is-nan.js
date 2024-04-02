console.log("isNaN(0 / 0): ", isNaN(0 / 0)); // true, because 0 / 0 is NaN
console.log("isNaN(0 / 1): ", isNaN(0 / 1)); // false, because 0 / 1 is 0
console.log("isNaN(aaa): ", isNaN("aaa")); // true, because "asd" cannot be converted to a number
console.log("isNaN([]): ", isNaN([])); // false, because [] is converted to 0

console.log("\n");

console.log("Number.isNaN(0 / 0): ", Number.isNaN(0 / 0)); // true, because 0 / 0 is NaN
console.log("Number.isNaN(0 / 1): ", Number.isNaN(0 / 1)); // false, because 0 / 1 is 0
console.log("Number.isNaN(aaa): ", Number.isNaN("aaa")); // false, because "asd" cannot be converted to a number
console.log("Number.isNaN([]): ", Number.isNaN([])); // false, because [] is converted to 0
