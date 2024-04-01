let age = 0;
console.log("Age is 0");
console.log("?? ", age ?? 18); // 0
console.log("|| ", age || 18); // 18

age = undefined;
console.log("\nAge is undefined");
console.log("?? ", age ?? 18); // 18
console.log("|| ", age || 18); // 18

let name = "";
console.log("\nName is empty string");
console.log("?? ", name ?? "John"); // ""
console.log("|| ", name || "John"); // John

name = null;
console.log("\nName is null");
console.log("?? ", name ?? "John"); // John
console.log("|| ", name || "John"); // John
