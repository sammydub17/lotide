const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`👌 Assertion Passed 👌: ${actual} === ${expected}`)
    : console.log(`💥 Assertion Failed 💥: ${actual} !== ${expected}`);
};

const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else if (arr.length > 0) {
    return arr[0];
  }
};

assertEqual(head([5,7,9]), 5);
assertEqual(head([5,7,9]), 4);
assertEqual(head(['Logan','Frank','Jim']), 'Logan');
assertEqual(head(['Logan','Frank','Jim']), 'Frank');
