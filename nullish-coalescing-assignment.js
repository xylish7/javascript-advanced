let num1 = 1;
console.log("Num1 before ?? assignment: ", num1); // 1
num1 ??= 10; // equivalent to num1 = num1 ?? 10
console.log("Num1 after ?? assignment: ", num1); // 1

console.log("\n");

let num2 = null;
console.log("Num2 before ?? assignment: ", num2); // null
num2 ??= 20; // equivalent to num2 = num2 ?? 20
console.log("Num2 after ?? assignment: ", num2); // 20

console.log("\n");

let num3 = 0;
console.log("Num3 before ?? assignment: ", num3); // 0
num3 ??= 30; // equivalent to num3 = num3 ?? 30
console.log("Num3 after ?? assignment: ", num3); // 0
