/**
 * Example 1
 */
function applyWithGreet() {
  const person1 = {
    name: "Alice",
    greet: function (greeting) {
      console.log(`${this.name} said ${greeting}`);
    },
  };

  const person2 = {
    name: "Carl",
  };

  person1.greet("Hi!"); // Alice said Hi!
  person1.greet.apply(person2, ["Hello!"]); // Carl said Hello!
}

/**
 * Example 2
 */
function applyWithMax() {
  const randomNumbers = [5, 2, 3, 4, 1];
  // Math.max accepts an array of numbers as arguments. An alternative solution to apply is the spread operator.
  const maxNumber = Math.max.apply(null, randomNumbers);
  console.log(`Max number: ${maxNumber}`); // 5
}

applyWithGreet();
console.log("\n");
applyWithMax();
