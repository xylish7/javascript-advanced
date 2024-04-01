const sentence =
  "The quick brown fox jumps over the lazy dog. If the Dog reacted, was it really lazy?";

console.log("Original:", sentence); // The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?
const newSentence = sentence.replaceAll("dog", "monkey");
console.log("Replace 'dog' with 'monkey': ", newSentence); // The quick brown fox jumps over the lazy monkey. If the Dog reacted, was it really lazy?

// 'g' flag must always be used, otherwise an error will be thrown
const newSentence2 = sentence.replaceAll(/dog/gi, "monkey");
console.log("Replace 'dog' with 'monkey', using regex: ", newSentence2); // The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?
