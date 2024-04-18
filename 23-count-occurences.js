// Write a Javascript function to count the occurences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each elemnt appears in the array.

// Here's what the function should be:

// Accept an array of numbers as input.
// Create an empty object called counts to store the counts of each element.
// Iterate through each number in the array.
// For each number, increment the count in the counts object.
// If the count for a number does not exist yet, initialize it to 1.
// Return the counts object containing the counts of each elemnt.

// Input 

const numbers = [1, 2, 3, 1, 4, 2];
let counts = {};

for (let element of numbers)
{
    counts[element] = (counts[element] || 0) + 1;    
}

console.log(counts);



// Output
// { '1': 2, '2': 2, '3': 1, '4': 1 }

// Constraints: 
// The input array may contain positive integers only.
// You can assume that the input array is not empty.

// Help
// const obj = {};
// ? Setting a property using square brackets
// obj["name"] = "thapa";
// console.log(obj); // Output: { 'key': 'value' }

// ? Accessing a property using square brackets
// console.log(obj["name"]); // Output: 'thapa'
// ? Accessing a property using square brackets