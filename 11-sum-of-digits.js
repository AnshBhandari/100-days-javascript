// Write a function that takes a number as input and returns the sum of its digits.

const sumOfDigits_1 = (num) => {
    let arr = Array.from(String(num), Number);
    // console.log(arr);
    return arr.reduce((accum, curEle) => accum += curEle, 0);
}

const sumOfDigits_2 = (num) => {
    let sum = 0;
    while (num !== 0)
    {
        sum += num%10;
        num = Math.floor(num / 10);
    }
    return sum;
}

const sumOfDigits_3 = (num) => {
    return num.toString().split("").reduce((sum, digit) => sum += parseInt(digit), 0);
}

const sumOfDigits_4 = (num) => {
    let sum = 0;
    num.toString().split("").forEach(digit => {
        sum += parseInt(digit);
    });
    return sum;
}

console.log(sumOfDigits_1(1234));
console.log(sumOfDigits_2(4321));
console.log(sumOfDigits_3(123456));
console.log(sumOfDigits_4(123));


// Constraints:

// The input number will always be a positive integer.
// The input number can have multiple digits.
//The output should be the sum of all the digits in the input number.

