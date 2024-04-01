# JavaScript: Mastering Advanced Concepts and Techniques

In the following sections, we will cover some advanced concepts and techniques in JavaScript.

## Table of Contents

- [JavaScript: Mastering Advanced Concepts and Techniques](#javascript-mastering-advanced-concepts-and-techniques)
  - [Table of Contents](#table-of-contents)
  - [Array.includes() vs Set.has()](#arrayincludes-vs-sethas)
  - [Call, apply, and bind](#call-apply-and-bind)
    - [call()](#call)
    - [apply()](#apply)
    - [bind()](#bind)
  - [Asynchronous code](#asynchronous-code)
    - [Promise.all()](#promiseall)
    - [Promise.allSettled()](#promiseallsettled)
    - [Promise.any()](#promiseany)
  - [Latest JavaScript features](#latest-javascript-features)
    - [Optional chaining](#optional-chaining)
    - [Nullish coalescing](#nullish-coalescing)
    - [Numeric separators](#numeric-separators)
    - [Array.prototype.at()](#arrayprototypeat)
    - [String replaceAll()](#string-replaceall)
    - [Logical OR assignment](#logical-or-assignment)

## Array.includes() vs Set.has()

The `Array.includes()` method is used to determine whether an array includes a certain element, returning `true` or `false` as appropriate. The `Set.has()` method is used to check whether a set contains a specified element, returning `true` or `false` as appropriate. However, for large arrays, the `Set.has()` method is much faster than the `Array.includes()` method.

[▶️ Example](./array-includes-vs-set-has.js)

## Call, apply, and bind

The `call()`, `apply()`, and `bind()` methods are used to call a function with a given `this` value and arguments. 

### call()

The `call()` method calls a function with a given `this` value and arguments provided individually. 

  [▶️ Example](./call.js)

### apply()

The `apply()` method calls a function with a given `this` value and arguments provided as an array. 
  
  [▶️ Example](./apply.js)

### bind()

The `bind()` method creates a new function that, when called, has its `this` value set to the provided value. It can also be used to create a function with pre-specified initial arguments.
  
  [▶️ Example 1 - simple functions](./bind.js)  

  [▶️ Example 2 - with event listeners](./bind-with-event-listeners/index.html)
  
  [▶️ Example 3 - with timers](./bind-with-timers/index.html)

> 💡 An alternative to bind when working with event listeners and timers is the use of arrow functions (see [▶️ Example 3 - with timers](./bind-with-timers/index.html)).

## Asynchronous code

### Promise.all() 

The `Promise.all()` method is used to wait for all promises to be resolved or for any to be rejected.
  
  [▶️ Example](./promise-all.js)

### Promise.allSettled()

The `Promise.allSettled()` method is used to wait for all promises to be settled (either resolved or rejected).
  
  [▶️ Example](./promise-all-settled.js)

### Promise.any()

The `Promise.race()` method is used to wait for the first promise to be resolved or rejected.
  
  [▶️ Example](./promise-race.js)

- Build your own promise : The `Promise` object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
  
  [▶️ Example](./promise.js)

## Latest JavaScript features

### Optional chaining 

The optional chaining operator (`?.`) is used to access properties of an object without having to check if the property exists. It also works when calling a method on an object that may be `null` or `undefined`.
  
  [▶️ Example](./optional-chaining.js)

### Nullish coalescing

The nullish coalescing operator (`??`) is used to provide a default value when a variable is `null` or `undefined`, but not when it is `0` or an empty string. The or operator (`||`) can be used to provide a default value when a variable is falsy, including `0` and an empty string.
  
  [▶️ Example](./nullish-coalescing.js)

### Numeric separators

Numeric separators are used to make large numbers more readable by separating them into groups of digits.
  
  [▶️ Example](./numeric-separators.js)

### Array.prototype.at()

The `Array.prototype.at()` method is used to access the element at a given index in an array. It returns `undefined` if the index is out of range.
  
  [▶️ Example](./array-at.js)

### String replaceAll()

The `String.prototype.replaceAll()` method is used to replace all occurrences of a substring in a string with another substring. It also supports regular expressions, but global flag (`g`) must always be used.
  
  [▶️ Example](./string-replace-all.js)

### Logical OR assignment 

The logical OR assignment operator (`||=`) is used to assign a value to a variable only if the variable is falsy.
  
  [▶️ Example](./logical-or-assignment.js)

