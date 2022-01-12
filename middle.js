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

// even number, return middle two arr.length/2 arr.length/2 +1

const middle = (arr) => {
  // console.log('Input Value:', arr)
  let outputArr = [];
  if (arr.length <= 2) return outputArr;
  const position = Math.floor(arr.length / 2);

  if (arr.length % 2 === 1) {
  // console.log('array is odd length')
    const value = arr.slice(position, position + 1);
    outputArr = value;
  }
  if (arr.length % 2 === 0) {
  // console.log('array is even length')
    const value = arr.slice(position - 1, position + 1);
    outputArr = value;
  }
  return outputArr;
};

assertArraysEqual(
  middle([1,2,3,4,5,6]),
  [3,4]
);
assertArraysEqual(
  middle([1,2,3,4,5,6,7]),
  [4]
);
assertArraysEqual(
  middle([1,2,3]),
  [2]
);