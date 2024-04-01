/**
 * Example 1
 */
function bindWithGreet() {
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
  const carlGreets = person1.greet.bind(person2);
  carlGreets("Hello!"); // Carl said Hello!
  carlGreets("Hey!"); // Carl said Hey!
}

/**
 * Example 2 - binding arguments of multiply function
 */
function bindArgumentsOfMultiply() {
  const num1 = 4;
  const num2 = 5;

  function multiply(a, b) {
    return a * b;
  }

  const double = multiply.bind(null, 2);
  const triple = multiply.bind(null, 3);
  console.log(`Double of ${num1} is ${double(num1)}`);
  console.log(`Triple of ${num2} is ${triple(num2)}`);
}

/**
 * Example 3 - binding arguments of salesTax function
 */

function bindArgumentsOfTax() {
  function applyTax(tax, price) {
    return price + price * tax;
  }

  const dkTax = applyTax.bind(null, 0.25);
  const usTax = applyTax.bind(null, 0.1);

  console.log(`Price in Denmark: ${dkTax(100)}`);
  console.log(`Price in US: ${usTax(100)}`);
}

bindWithGreet();
console.log("\n");
bindArgumentsOfMultiply();
console.log("\n");
bindArgumentsOfTax();
