// Write a function called calculateMean that takes an array of numbers as input and retrurns the mean (average) of those numbers.

// In math, the mean is the average of a set of numbers, or the numeric value that represents the centere of a collection of numbers.

// Constraints:
// The input array may contain positive and negative integers.
// The input array may be empty. If it is empty, the function should return 0.

const calculateMean = (arr) => {
    if (arr.length === 0)
        return 0;
    return arr.reduce((accum, curValue) => accum += curValue)/arr.length;
}


console.log(calculateMean([1, 2, 3, 4, 5]));  // 3
console.log(calculateMean([10, 20, 30]));     // 20
console.log(calculateMean([-1, 0, 1]));       // 0
console.log(calculateMean([]));               // 0