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
