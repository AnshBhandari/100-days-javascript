// Write a function simplePasswordValidator that takes a single parameter:

// password: A string representing the password to be validated.
// The function should validate the password based on the following criteria:

// The password must contain at least one lowercase letter, one uppercase letter, and one digit.
// The length of the password must be at least 8 characters.
// The function should return true if the password meets all the criteria, othewise, it should return false.

// Input:
// password: A non-empty string representing the password to be validated.

// Output:
// true if password meets all the criteria.
// false otherwise.

// Constraints:
// The input string password must contain only alphanueric characters and punctuation marks.


const simplePasswordValidator = (password) => {
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    for (let char of password) 
    {
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
        {
            hasUpperCase = true;
        }
        else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
        {
            hasLowerCase = true;
        }
        else if (!isNaN(Number(char)))
        {
            hasNumber = true;
        }
    }

    if (!hasUpperCase || !hasLowerCase || !hasNumber || password.length < 8)
    {
        return false;
    }
    return true;
}

console.log(simplePasswordValidator('Password'));
console.log(simplePasswordValidator('Password1'));
console.log(simplePasswordValidator('SecuredPassword'));
console.log(simplePasswordValidator('SecuredPassword1'));
