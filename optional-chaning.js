const user = {
  name: "John",
  age: 20,
  greet: function () {
    console.log(`${this.name} says hello!`);
  },
};

console.log(user.name); // John
console.log(user.address?.city); // without "?", this would throw an error, instead it returns undefined

console.log("\n");

user.greet(); // John says hello!
user.run?.(); // without "?", this would throw an error, instead it returns undefined
