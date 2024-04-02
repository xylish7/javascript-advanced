let num1 = 1;
console.log("Num1 before AND assignment: ", num1); // 1
num1 &&= 10; // equivalent to num1 = num1 && 10
console.log("Num1 after AND assignment: ", num1); // 10

console.log("\n");

let num2 = null;
console.log("Num2 before AND assignment: ", num2); // null
num2 &&= 20; // equivalent to num2 = num2 && 20
console.log("Num2 after AND assignment: ", num2); // null
