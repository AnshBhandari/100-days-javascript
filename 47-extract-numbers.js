// Write a regulat expression to extract all numbers from a given string.

// Requirements:
// Extract all numbers from string 
// Return the numbers as an array

// Use Cases:
// Parsing numeical data from text.
// Extract numerical values from calculations.
// Filtering numbers from mixed content.

const extractNumbers = (str) => {
    let regex = /\d+/g;
    return str.match(regex);
}

console.log(extractNumbers("abc123def456"));
console.log(extractNumbers("no numbers here"));
console.log(extractNumbers("1a2b3c4d"));
console.log(extractNumbers("100, 200 and 300"));
console.log(extractNumbers(""));

// Constraints :
// Extract all numeric values. 
// Return an array.