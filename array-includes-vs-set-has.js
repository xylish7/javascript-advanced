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
