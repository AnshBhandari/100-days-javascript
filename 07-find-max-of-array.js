// Write a function findMax that takes an array of numbers as input return maximum number in the array 

const findMax = (arr) => {
    console.log(arr);         // [ 3, 72, 54, 21, 2 ]
    console.log(...arr);      // 3 72 54 21 2
    return Math.max(...arr);  // 72
    return Math.max(arr);     // NaN
} 

console.log(
    findMax([3, 72, 54, 21, 2])
)