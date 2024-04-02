// Id generator
function idGenerator() {
  let id = 0;
  return function () {
    return id++;
  };
}

const nextId = idGenerator();
console.log(nextId()); // 0
console.log(nextId()); // 1
console.log(nextId()); // 2

console.log("\n");

// Counter
function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1

console.log("\n");

// Factory function
function createExponentFunction(power) {
  return function (x) {
    return Math.pow(x, power);
  };
}

const square = createExponentFunction(2);
console.log("Square of 2: ", square(2)); // 4
const cube = createExponentFunction(3);
console.log("Cube of 2: ", cube(2)); // 8

console.log("\n");

// Loops
for (let i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}
