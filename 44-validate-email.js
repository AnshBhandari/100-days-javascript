// You're tasked with implementing a function to validate email addresses using a regular expression. Write a function validEmail(email) that takes a string email as input and returns true if the email address is valid according to the following rules:

// 1. The local part of the email address (before "@") can contain:

// Alphanumeric characters (A-Z, a-z, 0-9)
// Special characters: period ".", underscore "_", Percentage "%", Plus "+", Hyphen "-" 
// Consecutive periods are not allowed
// Special characters cannot appear at the beginnin or the end of the local part

// 2. The domain part of the email address (after the "@) can contain:

// Alphanumeric characters (A-Z, a-z, 0-9)
// Hyphen "-"
// Period "."
// Must contain atleast one period 
// The top-level domain (TLD) must contain atleast two alphanumeric characters (e.g., "com", "org", "net", etc).

const validateEmail = (email) => {
    return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email);
}

console.log(validateEmail("lorem.ipsum@example.com"));
console.log(validateEmail("lorem..ipsum@dom.com"));
console.log(validateEmail("loremipsum@domcom"));
console.log(validateEmail("loremipsum@dom"));