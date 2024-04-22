// Write a function called repeatString that takes two parameters:

// str: A string that needs to be repeated.
// num: An integer representing the number of times the string should be repeated.
// The function should repeat the input string str the specified number of times num and return the resulting string.

const repeatString = (str, num) => {
    return str.repeat(num);
}

console.log(repeatString("anshBhandari", 4));

// Constraints:
// The input string str will contain only alphanumeric characters and punctuation marks.
// The input number num will be a non-negative integer.
// The output string length should not exceeed the length of str multiplied bt num.