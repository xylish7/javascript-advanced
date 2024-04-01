const btn = document.querySelector("#btn");

const person1 = {
  name: "Alice",
  greet: function () {
    console.log(this);
    console.log(`Hello, ${this.name}`);
  },
};

// Bind must be used to bind the context of the function to the object
// otherwise the value of this will be the button element
btn.addEventListener("click", person1.greet.bind(person1));
