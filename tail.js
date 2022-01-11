const assertEqual = function(actual, expected) {
//   if (typeof actual === 'object' && typeof expected === 'object') {
//   actual = actual.toString()
//   expected = expected.toString()
// }
  actual === expected
    ? console.log(`👌 Assertion Passed 👌: ${actual} === ${expected}`)
    : console.log(`💥 Assertion Failed 💥: ${actual} !== ${expected}`);
};

const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  } else if (arr.length > 1) {
    return arr.slice(1);
  }
};

const arr1 = [5, 7, 9];
const result1 = tail(arr1);
assertEqual(result1[0], 7);
assertEqual(result1[1], 9);
assertEqual(result1.length, 2);
assertEqual(arr1.length, 3);

const arr2 = ["Jim", "Bob", "Miroslav", "Hector"];
const result2 = tail(arr2);
assertEqual(result2[0], "Bob");
assertEqual(result2[1], "Miroslav");
assertEqual(result2[2], "Hector");
assertEqual(result2.length, 3);
assertEqual(arr2.length, 4);

const arr3 = [];
const result3 = tail(arr3);
assertEqual(result3.length, 0);