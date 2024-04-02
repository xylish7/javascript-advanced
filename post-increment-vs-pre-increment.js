let a = 1;
let b = a++; // a is assigned to b first, then incremented
console.log("a: ", a); // 2
console.log("b: ", b); // 1

console.log("\n");

let x = 1;
let y = ++x; // x is incremented first, then assigned to y
console.log("x: ", x); // 2
console.log("y: ", y); // 2

console.log("\n");

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
