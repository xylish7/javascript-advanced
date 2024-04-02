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
