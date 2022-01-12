const eqArrays = (firstArr, secondArr) => {
  if (firstArr.length !== secondArr.length) return false;
  for (let i in firstArr) {
    if (firstArr[i] !== secondArr[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(firstArr, secondArr) {
  eqArrays(firstArr, secondArr)
    ? console.log(`👌 Assertion Passed 👌: ${firstArr} === ${secondArr}`)
    : console.log(`💥 Assertion Failed 💥: ${firstArr} !== ${secondArr}`);
};

const without = (items, junkItems) => {
  const wantedItems = [];
  // loop through items
  for (let i in items) {
    // if junkItems array not includes item, push to wanted items
    if (!junkItems.includes(items[i])) {
      wantedItems.push(items[i]);
    }
  }
  // return wanted items
  return wantedItems;
};

let testArr = [9,5,4];

console.log(assertArraysEqual(without(['yes', 'no', 'maybe'], ['yes']), ['no', 'maybe'], false)); // false
console.log(assertArraysEqual(without(['yes', 'no', 'maybe'], ['no']), ['no', 'maybe'], false)); // true
console.log(assertArraysEqual(without(['yes', 'no', 'maybe'], ['no']), ['yes', 'maybe'], true)); // true
console.log(assertArraysEqual(without(['no', 'maybe'], ['yes']), ['no', 'maybe'], true)); // true

without(testArr, [9]);
console.log(
  assertArraysEqual(testArr, [9,5,4], true) // true
);

