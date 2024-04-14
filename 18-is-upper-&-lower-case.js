// ? Write a function to check if a character is uppercase or lowercase.

// * Constraints:

// ? The input char will be a single chracter.
// ? The character can be any printable ASCII character.
// ? You can assume that the input will always be a string of length 1.


const isUpperCase = (char) => {
  return (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ? true : false; 
//   return (char === char.toUpperCase()); 
};

const isLowerCase = (char) => {
    return (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ? true : false;   
    // return (char === char.toLowerCase()); 
};

// Example :

console.log(isUpperCase("A")); // true
console.log(isUpperCase("n")); // false
console.log(isLowerCase("S")); // false
console.log(isLowerCase("h")); // true

//* Notes:

// ? Ensure that the function correctly identifies upppercase characters based on their ASCII.
// ? Optimize the function to handle edge cases efficiently.
