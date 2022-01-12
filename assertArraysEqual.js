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

console.log(
  assertArraysEqual([1,2,3], [1,2,3]) // expect true
);
console.log(
  assertArraysEqual([1,2,3], [1,2,4]) // expect false
);