// Create a function validatePassword that checks if a given password string meets the following criteria:

// Minimum Length: The password must be at least 8 characters long.
// Case Requirements: The password must conatain at least one uppercase letter and at least one lowercase letter.
// Numerical Requirement: The password must conatain at one digit.
// Special Character Requirement: The password must have at least one special character from the set !@#$%^&*()-_+=

// Requirements:
// The function should return true if the password meets all the criteria, and false otherwise.

const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

console.log(validatePassword("Pass123!"));
console.log(validatePassword("password"));
console.log(validatePassword("12345678"));
console.log(validatePassword("P@ssw0rd"));
