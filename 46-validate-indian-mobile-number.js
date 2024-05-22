// Write a function that takes a string as input and returns true if the string represents a valid Indian mobile number, and false otherwise.

// Validation Requirements:
// Length: An Indian mobile number should have exactly 10 digits.
// Starting Digit: The number must start with 6, 7, 8, or 9, which are valid starting digits for Indian numbers.

const validateIndianMobileNumeber = (number) => {
    return /^[6-9][\d]{9}$/.test(number);
}

console.log(validateIndianMobileNumeber("9876543210"));
console.log(validateIndianMobileNumeber("0123456789"));
console.log(validateIndianMobileNumeber("897654321"));
console.log(validateIndianMobileNumeber("78965432107"));

// Constraints: 
// The input string may contain numeric characters only.
// Assume input strings will not include any country codes.