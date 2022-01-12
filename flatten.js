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


const flatten = (arr) => {
  const outputArr = []
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let subItem of item) {
        outputArr.push(subItem)
      }
    } else {
      outputArr.push(item)
    }
  }
  return outputArr
}

console.log(flatten(
  [1,2,[3,4],5]
))
