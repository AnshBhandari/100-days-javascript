// Write a function that takes an array of numbers as input and returns the minimum value found in the array.

// Constraints:

// The input array may contain both positive and negative intgers.
// The input array may be empty.
// The input array may conatain duplicate values.

const findMin_1 = (arr) => {
  return arr.sort((a, b) => a - b)[0];
};

const findMin_2 = (arr) => {
  return arr.sort((a, b) => {
    if (b > a) return -1;
  })[0];
};

const findMin_3 = (arr) => {
  if (arr.length === 0) return "Array is Empty";
  return Math.min(...arr);
};

console.log(findMin_1([5, 10, 2, 8]));
console.log(findMin_2([5, -3, 0, 12, -7]));
console.log(findMin_3([]));

// Note:
// Ensure the function handles edge cases gracefully, such as an empty input array.
// Consider using ES6 features like the spread syntax (...) for a concise implementation.

// In Javascript, the spread syntax (...) is used to expand an array into individual elements.In this function, ...arr is used to spread the elements of the input arr.

// For example, if the arr is [5, 10, 2, 8] then ...arr expands to 5, 10, 2, 8.