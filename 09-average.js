// Calculate: Calculate the Average

// Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

// Your function should:

// Accept an array of numbers as input.
// Calculates the sum of all the numbers in the array.
// Divide the sum by the total number of elements in the array to find the average.
// Return the calculated average.

// Example usage:


const calculateAverage = (nums) => {
  let total = nums.reduce((accum, curEle) => accum + curEle, 0);
  return total/nums.length;
};

console.log(calculateAverage([5, 10, 2, 8]));
