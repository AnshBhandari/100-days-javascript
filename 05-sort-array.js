// Write a function to sort an array of numbers in ascending order.

const sortArray = (arr) => {

    return arr.sort((a, b) => a - b);  // for sorting array in ascending order
    return arr.sort((a, b) => a + b);  // for sorting array in descending order
} 

// sort();  // sort method is handling the values as strings.
            // but in order to sort the value as integers we have to pass 
            // a comparator function.

console.log(
    sortArray([5, 3, 10, 8])
);

// The function should take an array of numbers as input.
// It should return a new array with the numbers sorted in ascending order.