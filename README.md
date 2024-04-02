# JavaScript: Mastering Advanced Concepts and Techniques

In the following sections, we will cover some advanced concepts and techniques in JavaScript.

## Table of Contents

- [JavaScript: Mastering Advanced Concepts and Techniques](#javascript-mastering-advanced-concepts-and-techniques)
  - [Table of Contents](#table-of-contents)
  - [Array.includes() vs Set.has()](#arrayincludes-vs-sethas)
  - [Call, apply, and bind](#call-apply-and-bind)
    - [call()](#call)
    - [apply()](#apply)
      - [Example 1](#example-1)
      - [Example 2](#example-2)
    - [bind()](#bind)
      - [Simple functions](#simple-functions)
      - [With event listeners](#with-event-listeners)
      - [With timers](#with-timers)
  - [Asynchronous code](#asynchronous-code)
    - [Promise.all()](#promiseall)
    - [Promise.allSettled()](#promiseallsettled)
    - [Promise.race()](#promiserace)
    - [Build your own promise](#build-your-own-promise)
  - [Latest JavaScript features](#latest-javascript-features)
    - [Optional chaining](#optional-chaining)
    - [Nullish coalescing](#nullish-coalescing)
    - [Numeric separators](#numeric-separators)
    - [Array.prototype.at()](#arrayprototypeat)
    - [String replaceAll()](#string-replaceall)
    - [Logical OR assignment](#logical-or-assignment)
    - [Logical AND assignment](#logical-and-assignment)
    - [Nullish coalescing assignment](#nullish-coalescing-assignment)
  - [Tricky JavaScript parts](#tricky-javascript-parts)
    - [Float imprecision](#float-imprecision)
    - [isNaN() vs Number.isNaN()](#isnan-vs-numberisnan)
    - [Post increment vs pre increment](#post-increment-vs-pre-increment)
      - [Example 1](#example-1-1)
      - [Example 2](#example-2-1)
    - [Generator functions](#generator-functions)
      - [Example 1 - Even numbers](#example-1---even-numbers)
      - [Example 2 - Batch of images](#example-2---batch-of-images)
    - [Array.from()](#arrayfrom)
      - [Example 1 - String to array](#example-1---string-to-array)
      - [Example 2 - Set to array](#example-2---set-to-array)
      - [Example 3 - Node list to array](#example-3---node-list-to-array)
      - [Example 4 - Map function](#example-4---map-function)
      - [Example 5 - Generate an array of numbers from 1 to 5](#example-5---generate-an-array-of-numbers-from-1-to-5)
    - [IIFE](#iife)
    - [Closure](#closure)
      - [Example 1 - Id generator](#example-1---id-generator)
      - [Example 2 - Counter](#example-2---counter)
      - [Example 3 - Factory function](#example-3---factory-function)
  - [Functional Programming](#functional-programming)
    - [Compose function](#compose-function)
  - [Web Storage API](#web-storage-api)
    - [Session Storage](#session-storage)
  - [Intersection Observer](#intersection-observer)
    - [Track Ad View Time](#track-ad-view-time)
    - [Lazy Loading Images](#lazy-loading-images)
  - [Performance API](#performance-api)
    - [Track Resource Load Time](#track-resource-load-time)
  - [Attribution](#attribution)

## Array.includes() vs Set.has()

The `Array.includes()` method is used to determine whether an array includes a certain element, returning `true` or `false` as appropriate. The `Set.has()` method is used to check whether a set contains a specified element, returning `true` or `false` as appropriate. However, for large arrays, the `Set.has()` method is much faster than the `Array.includes()` method.

```javascript
function generateRandomArray(length) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.random());
  }
  return randomArray;
}

// Calculating time for Array.prototype.includes
function calculateIncludesRunTime(arrayToBeFiltered, filterValues) {
  console.log("\x1b[34m%s\x1b[0m", "[*] includes");
  console.time("Run time");
  arrayToBeFiltered.filter((value) => !filterValues.includes(value));
  console.timeEnd("Run time");
}

// Calculating time for Set.has
function calculatesHasRunTime(arrayToBeFiltered, filterValues) {
  console.log("\x1b[34m%s\x1b[0m", "[*] set");
  console.time("Run time");
  const setFilterValues = new Set(filterValues);
  arrayToBeFiltered.filter((value) => !setFilterValues.has(value));
  console.timeEnd("Run time");
}

const arrayToBeFiltered = generateRandomArray(1000);
const filterValues = generateRandomArray(1000);

calculateIncludesRunTime(arrayToBeFiltered, filterValues);
console.log("\n");
calculatesHasRunTime(arrayToBeFiltered, filterValues);
```

## Call, apply, and bind

The `call()`, `apply()`, and `bind()` methods are used to call a function with a given `this` value and arguments.

### call()

The `call()` method calls a function with a given `this` value and arguments provided individually.

```javascript
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
```

### apply()

The `apply()` method calls a function with a given `this` value and arguments provided as an array.

#### Example 1

```javascript
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
```

#### Example 2

```javascript
const randomNumbers = [5, 2, 3, 4, 1];
// Math.max accepts an array of numbers as arguments. An alternative solution to apply is the spread operator.
const maxNumber = Math.max.apply(null, randomNumbers);
console.log(`Max number: ${maxNumber}`); // 5
```

### bind()

The `bind()` method creates a new function that, when called, has its `this` value set to the provided value. It can also be used to create a function with pre-specified initial arguments.

#### Simple functions

- Example 1

  ```javascript
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
  ```

- Example 2 - binding arguments of multiply function

  ```javascript
  const num1 = 4;
  const num2 = 5;

  function multiply(a, b) {
    return a * b;
  }

  const double = multiply.bind(null, 2);
  const triple = multiply.bind(null, 3);
  console.log(`Double of ${num1} is ${double(num1)}`);
  console.log(`Triple of ${num2} is ${triple(num2)}`);
  ```

- Example 3 - binding arguments of salesTax function

  ```javascript
  function applyTax(tax, price) {
    return price + price * tax;
  }

  const dkTax = applyTax.bind(null, 0.25);
  const usTax = applyTax.bind(null, 0.1);

  console.log(`Price in Denmark: ${dkTax(100)}`);
  console.log(`Price in US: ${usTax(100)}`);
  ```

#### With event listeners

[▶️ Example](./bind-with-event-listeners/index.html)

#### With timers

[▶️ Example 3](./bind-with-timers/index.html)

> 💡 An alternative to bind when working with event listeners and timers is the use of arrow functions (see [▶️ Example 3](./bind-with-timers/index.html)).

## Asynchronous code

Asynchronous code is used to perform tasks that take time to complete, such as fetching data from a server or reading a file. JavaScript provides several ways to work with asynchronous code, including callbacks, promises, and async/await.

### Promise.all()

The `Promise.all()` method is used to wait for all promises to be resolved or for any to be rejected.

```javascript
const fetches = [
  fetch("https://pokeapi.co/api/v2/pokemon/1"),
  // Uncomment the line below to see the error message
  // fetch("https://bad-url.com"),
  fetch("https://pokeapi.co/api/v2/pokemon/2"),
  fetch("https://pokeapi.co/api/v2/pokemon/3"),
];

Promise.all(fetches)
  .then((responses) => {
    responses.forEach((response) => {
      console.log(response.url);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
```

### Promise.allSettled()

The `Promise.allSettled()` method is used to wait for all promises to be settled (either resolved or rejected).

```javascript
const fetches = [
  fetch("https://pokeapi.co/api/v2/pokemon/1"),
  fetch("https://bad-url"),
  fetch("https://pokeapi.co/api/v2/pokemon/3"),
];

Promise.allSettled(fetches)
  .then((responses) => {
    responses.forEach((response) => {
      console.log(response.status);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
```

### Promise.race()

The `Promise.race()` method is used to wait for the first promise to be resolved or rejected.

```javascript
const fetches = [
  //   Uncomment the line below to see the error message since the URL is invalid and it will resolve first
  //   fetch("https://bad-url.com"),
  fetch("https://pokeapi.co/api/v2/pokemon/1"),
  fetch("https://pokeapi.co/api/v2/pokemon/2"),
  fetch("https://pokeapi.co/api/v2/pokemon/3"),
];

Promise.race(fetches)
  .then((response) => {
    // First response to resolve will be logged
    console.log(response.url);
  })
  .catch((error) => {
    console.log(error.message);
  });
```

### Build your own promise

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

```javascript
function wait(ms, fail = false) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (fail) {
        reject("error");
      }
      resolve(undefined);
    }, ms),
  );
}

async function logAfter() {
  console.log("start resolve");
  await wait(1000);
  console.log("1s\n");

  console.log("start reject");
  try {
    await wait(1000, true);
  } catch (error) {
    console.log("1s error");
  }
}

logAfter();
```

## Latest JavaScript features

### Optional chaining

The optional chaining operator (`?.`) is used to access properties of an object without having to check if the property exists. It also works when calling a method on an object that may be `null` or `undefined`.

```javascript
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
```

### Nullish coalescing

The nullish coalescing operator (`??`) is used to provide a default value when a variable is `null` or `undefined`, but not when it is `0` or an empty string. The or operator (`||`) can be used to provide a default value when a variable is falsy, including `0` and an empty string.

```javascript
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
```

### Numeric separators

Numeric separators are used to make large numbers more readable by separating them into groups of digits.

```javascript
const bigNumber = 1_000_000_000.23;
console.log(bigNumber); // 1000000000
```

### Array.prototype.at()

The `Array.prototype.at()` method is used to access the element at a given index in an array. It returns `undefined` if the index is out of range.

```javascript
const colors = ["red", "green", "blue", "yellow", "pink"];

// Get the first element of the array
console.log(colors.at(0)); // red

// Get the last element of the array
console.log(colors.at(-1)); // pink

// Get the second last element of the array
console.log(colors.at(-2)); // yellow

// Get the element at index 10 (out of bounds)
console.log(colors.at(10)); // undefined
```

### String replaceAll()

The `String.prototype.replaceAll()` method is used to replace all occurrences of a substring in a string with another substring. It also supports regular expressions, but global flag (`g`) must always be used.

```javascript
const sentence = "The quick brown fox jumps over the lazy dog. If the Dog reacted, was it really lazy?";

console.log("Original:", sentence); // The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?
const newSentence = sentence.replaceAll("dog", "monkey");
console.log("Replace 'dog' with 'monkey': ", newSentence); // The quick brown fox jumps over the lazy monkey. If the Dog reacted, was it really lazy?

// 'g' flag must always be used, otherwise an error will be thrown
const newSentence2 = sentence.replaceAll(/dog/gi, "monkey");
console.log("Replace 'dog' with 'monkey', using regex: ", newSentence2); // The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?
```

### Logical OR assignment

The logical OR assignment operator (`||=`) is used to assign a value to a variable only if the variable is falsy.

```javascript
let num1 = 1;
console.log("Num1 before OR assignment: ", num1); // 1
num1 ||= 10; // equivalent to num1 = num1 || 10
console.log("Num1 after OR assignment: ", num1); // 1

console.log("\n");

let num2 = null;
console.log("Num2 before OR assignment: ", num2); // null
num2 ||= 20; // equivalent to num2 = num2 || 20
console.log("Num2 after OR assignment: ", num2); // 20
```

### Logical AND assignment

The logical AND assignment operator (`&&=`) is used to assign a value to a variable only if the variable is truthy.

```javascript
let num1 = 1;
console.log("Num1 before AND assignment: ", num1); // 1
num1 &&= 10; // equivalent to num1 = num1 && 10
console.log("Num1 after AND assignment: ", num1); // 10

console.log("\n");

let num2 = null;
console.log("Num2 before AND assignment: ", num2); // null
num2 &&= 20; // equivalent to num2 = num2 && 20
console.log("Num2 after AND assignment: ", num2); // null
```

### Nullish coalescing assignment

The nullish coalescing assignment operator (`??=`) is used to assign a value to a variable only if the variable is `null` or `undefined`.

```javascript
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
```

## Tricky JavaScript parts

### Float imprecision

Floating-point numbers in JavaScript are represented as 64-bit floating-point numbers according to the IEEE 754 standard. This can lead to imprecision when performing arithmetic operations on floating-point numbers.

```javascript
console.log("0.1 + 0.2 = ", 0.1 + 0.2); // 0.30000000000000004
console.log("0.1 + 0.2 = 0.3", 0.1 + 0.2 === 0.3); // false
console.log("0.1 + 0.3 = ", 0.1 + 0.3); // 0.4
console.log("0.1 + 0.30000001 = ", 0.1 + 0.30000001); // 0.40000000999999996
console.log("0.1 + 0.30000001 = 0.4", 0.1 + 0.30000001 === 0.4); // false
```

### isNaN() vs Number.isNaN()

The `isNaN()` function is used to determine whether a value is `NaN`, but it can also return `true` for other non-numeric values. The `Number.isNaN()` method is used to determine whether a value is `NaN` and only returns `true` for `NaN` values.

```javascript
console.log("isNaN(0 / 0): ", isNaN(0 / 0)); // true, because 0 / 0 is NaN
console.log("isNaN(0 / 1): ", isNaN(0 / 1)); // false, because 0 / 1 is 0
console.log("isNaN(aaa): ", isNaN("aaa")); // true, because "asd" cannot be converted to a number
console.log("isNaN([]): ", isNaN([])); // false, because [] is converted to 0

console.log("\n");

console.log("Number.isNaN(0 / 0): ", Number.isNaN(0 / 0)); // true, because 0 / 0 is NaN
console.log("Number.isNaN(0 / 1): ", Number.isNaN(0 / 1)); // false, because 0 / 1 is 0
console.log("Number.isNaN(aaa): ", Number.isNaN("aaa")); // false, because "asd" cannot be converted to a number
console.log("Number.isNaN([]): ", Number.isNaN([])); // false, because [] is converted to 0
```

### Post increment vs pre increment

The post-increment operator (`++`) increments the value of a variable after it has been used in an expression, while the pre-increment operator (`++`) increments the value of a variable before it has been used in an expression.

#### Example 1

```javascript
let a = 1;
let b = a++; // a is assigned to b first, then incremented
console.log("a: ", a); // 2
console.log("b: ", b); // 1

console.log("\n");

let x = 1;
let y = ++x; // x is incremented first, then assigned to y
console.log("x: ", x); // 2
console.log("y: ", y); // 2
```

#### Example 2

```javascript
class PostCounter {
  current = 0;

  incrementPost() {
    return this.current++;
  }
}

class PreCounter {
  current = 0;

  incrementPre() {
    return ++this.current;
  }
}

const postCounter = new PostCounter();
console.log("postCounter.current: ", postCounter.current); // 0
console.log("postCounter.incrementPost(): ", postCounter.incrementPost()); // 0

console.log("\n");

const preCounter = new PreCounter();
console.log("preCounter.current: ", preCounter.current); // 0
console.log("preCounter.incrementPre(): ", preCounter.incrementPre()); // 1
```

### Generator functions

Generator functions are a special type of function that can be paused and resumed. They are defined using the `function*` syntax and the `yield` keyword.

#### Example 1 - Even numbers

```javascript
function* evenNumbers() {
  let num = 0;
  while (true) {
    yield num;
    num += 2;
  }
}

const numbers = evenNumbers();
console.log(numbers.next().value); // 0
console.log(numbers.next().value); // 2
console.log(numbers.next().value); // 4
console.log(numbers.next().value); // 6
```

#### Example 2 - Batch of images

```javascript
// Generator function to get a batch of images
function* getBatchOfImages(images, batchSize) {
  let index = 0;
  while (index < images.length) {
    yield images.slice(index, index + batchSize);
    index += batchSize;
  }
}

const allImages = Array.from({ length: 100 }, (_, i) => `image${i + 1}.jpg`);
const imageGenerator = getBatchOfImages(allImages, 10);
console.log("First batch of 10 images: ", imageGenerator.next().value); // ["image1.jpg", "image2.jpg", ..., "image10.jpg"]
console.log("Second batch of 10 images: ", imageGenerator.next().value); // ["image1.jpg", "image2.jpg", ..., "image10.jpg"]
```

### Array.from()

The `Array.from()` method is used to create a new array from an array-like or iterable object. It also accepts a mapping function as a second argument.

#### Example 1 - String to array

```javascript
// String to array
console.log("Array.from('hello'): ", Array.from("hello")); // ["h", "e", "l", "l", "o"]
```

#### Example 2 - Set to array

```javascript
// Set to array
console.log("Array.from(new Set([1, 2, 3, 3])): ", Array.from(new Set([1, 2, 3, 3]))); // [1, 2, 3]
```

#### Example 3 - Node list to array

```javascript
// Node list to array. This is useful when you want to use array methods on a node list.
const nodeList = document.querySelectorAll("p");
console.log("Array.from(nodeList): ", Array.from(nodeList)); // [p, p, p, p]
```

#### Example 4 - Map function

```javascript
// Apply a map function to each element in the array
console.log(
  "Array.from('123', x => x * 2): ",
  Array.from("123", (x) => x * 2),
); // [2, 4, 6]
```

#### Example 5 - Generate an array of numbers from 1 to 5

```javascript
// Generate an array of numbers from 1 to 5
console.log(
  "Array.from({ length: 5 }, (_, i) => i + 1): ",
  Array.from({ length: 5 }, (_, i) => i + 1),
); // [1, 2, 3, 4, 5]
```

### IIFE

An Immediately Invoked Function Expression (IIFE) is a function that is executed immediately after it is defined. It is defined using the `(function(){...})()` syntax. They are used to create a new scope for variables and to avoid polluting the global scope.

```javascript
(function () {
  let secret = "ABCD";
  console.log("IIFE");
  console.log(secret);
})();
```

### Closure

A closure is a function that has access to its own scope, the scope of its parent function, and the global scope. It is created when a function is defined inside another function and the inner function is returned or passed as a parameter. Closures are used to create private variables and functions.

#### Example 1 - Id generator

```javascript
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
```

#### Example 2 - Counter

```javascript
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
```

#### Example 3 - Factory function

```javascript
function createExponentFunction(power) {
  return function (x) {
    return Math.pow(x, power);
  };
}

const square = createExponentFunction(2);
console.log("Square of 2: ", square(2)); // 4
const cube = createExponentFunction(3);
console.log("Cube of 2: ", cube(2)); // 8
```

## Functional Programming

Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It is based on the principles of declarative programming and immutability.

### Compose function

The `compose` function is used to combine multiple functions into a single function that is executed from right to left.

```javascript
function compose(...functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}

function lowerCase(str) {
  return str.toLowerCase();
}

function splitWords(str) {
  return str.split(" ");
}

function joinWords(str) {
  return str.join("-");
}

const slugify = compose(joinWords, splitWords, lowerCase);
console.log(slugify("Hello World")); // hello-world
```

## Web Storage API

The Web Storage API provides mechanisms by which browsers can store key-value pairs locally. The two main storage mechanisms are `localStorage` and `sessionStorage`.

### Session Storage

The `sessionStorage` object is used to store data for the duration of the page session. The data is stored in key-value pairs and is accessible only in the current tab.

[▶️ Example](./session-storage/index.html)

## Intersection Observer

The Intersection Observer API is used to observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

### Track Ad View Time

[▶️ Example](./intersection-obervers-track-ad-view-time/index.html)

### Lazy Loading Images

[▶️ Example](./intersection-observer-lazy-loading-images/index.html)

## Performance API

The Performance API provides a way to measure the performance of web applications.

```javascript
const largeArray = Array.from({ length: 10000 }, (_, i) => {
  return Math.floor(Math.random() * 1000);
});

function bubbleSort() {
  for (let i = 0; i < largeArray.length; i++) {
    for (let j = 0; j < largeArray.length; j++) {
      if (largeArray[j] > largeArray[j + 1]) {
        const temp = largeArray[j];
        largeArray[j] = largeArray[j + 1];
        largeArray[j + 1] = temp;
      }
    }
  }
}

const arrayForBubbleSort = [...largeArray];
const arrayForJSSort = [...largeArray];

performance.mark("startBubbleSort");
bubbleSort();
performance.mark("endBubbleSort");
performance.measure("bubbleSort", "startBubbleSort", "endBubbleSort");

performance.mark("startJSSort");
arrayForJSSort.sort((a, b) => a - b);
performance.mark("endJSSort");
performance.measure("JSSort", "startJSSort", "endJSSort");

const bubbleSortDuration = performance.getEntriesByName("bubbleSort")[0].duration;
const JSSortDuration = performance.getEntriesByName("JSSort")[0].duration;

console.log(`Bubble sort duration: ${bubbleSortDuration.toFixed(1)}ms`);
console.log(`JS sort duration: ${JSSortDuration.toFixed(1)}ms`);
```

### Track Resource Load Time

[▶️ Example](./performance-api-track-resource-load-time/index.html)


## Attribution

- [JavaScript Pro: Mastering Advanced Concepts and Techniques](https://www.udemy.com/course/pro-javascript)