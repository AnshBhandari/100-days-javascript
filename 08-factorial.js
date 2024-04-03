// Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.

// Here are some example of factorial calculations:

// factorial(0) = 1
// factorial(1) = 1
// factorial(2) = 2
// factorial(3) = 6
// factorial(4) = 24
// factorial(5) = 120

// Your function should work for any non-negative integer

const factorial_1 = (num) => {
  if (num >= 0) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
    return fact;
  } else {
    return "Enter a positive number";
  }
};

const factorial_2 = (num) => {
  if (num >= 0) {
    if (num === 0) {
      return 1;
    } else {
      return num * factorial_2(num - 1);
    }
  } else {
    return "Can't find Factorial of a negative number";
  }
};

console.log(factorial_1(0));
console.log(factorial_2(0));

console.log(factorial_1(-1));
console.log(factorial_2(-1));

console.log(factorial_1(3));
console.log(factorial_2(3));
