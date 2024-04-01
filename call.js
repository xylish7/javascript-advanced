const person1 = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

const person2 = {
  name: "Carl",
};

person1.greet(); // Hello, Alice
person1.greet.call(person2); // Hello, Carl
