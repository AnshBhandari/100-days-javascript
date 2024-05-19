// Write a function to validate credit card number using Luhn Algorithm.

// Requirements:

// Write a function validateCreditCard that takes a credit card number as a string.
// The function should return true if the number is valid according to the Luhn algorithm, and false otherwise.
// Ensure the function can handle numeber as strings, which may include spaces and dashes.

// Luhn Algorithm Steps:

// Start with the digits of the numeber. For example, if validating the number 79927398713.
// Reverse the digits 31789372997.
// Double every secong digit.

// 3, 1*2, 7, 8*2, 9, 3*2, 7, 2*2, 9, 9*2, 7.
// 327(16)96749(18)7

// Subtract the 9 from the number which are higher than 9.
// 32779674997

// Sum all the digits
// 60

// Find modulo 10 of the sum
// If the sum modulo 10 is 0 then the card number is valid according to the Luhn algorithm.

const validateCreditCard = (str) => {

    str = str.replace(/\D/g, "");

    let rNum = "";
    for (let i = str.length - 1; i >= 0; i--)
    {
        rNum = rNum + str[i];
    }
    // return rNum;

    let doubleNum = rNum.split("").map((curDigit, index) => {
        if (index % 2 !== 0) 
        {
            curDigit = curDigit * 2;
            if (curDigit > 9)
            {
                curDigit = curDigit - 9;
            }
            else 
            {
                curDigit = curDigit;
            }
        }
        return curDigit;
    }).reduce((accum, curElem) => accum + Number(curElem), 0);
    console.log(doubleNum);
    return doubleNum % 10 === 0;
}

console.log(validateCreditCard("4539 1488 0343 6467"));
console.log(validateCreditCard("8273 1232 7532 0569"));


