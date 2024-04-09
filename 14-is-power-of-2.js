// Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise.

const isPowerOfTwo_1 = (num) => {
    let flag = true;
    for (let i = 0; i <= num; i++)
        if (2 ** i == num) 
            flag = true;
    return flag;
}

const isPowerOfTwo_2 = (num) => {
    if (num <= 0) 
        return false;
    // A number is a power of two if and only if it has exactly one set bit (1) in its binary representation
    return (num & (num - 1)) === 0;
}


console.log(isPowerOfTwo_1(8));
console.log(isPowerOfTwo_2(7));

console.log(isPowerOfTwo_1(8));
console.log(isPowerOfTwo_2(7));

// Notes:
// The input num will be a positive integer.
// Zero (0) and negative integers are not considered powers of two.
// The function should return true if the given number is a power of 2 and false otherwise.
