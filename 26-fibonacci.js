// Write a function to find the nth fibonacci number

// The fibonacci series is a sequence of numbers in which each number (Fibonacci number) is the sum of the two preceding ones.
// It starts with 0 and 1, and the subsequent numbers are calculated by adding the last two numbers. 
// So, the fibonacci series looks like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

// syntax: F(n) = F(n-1) + F(n-2)

const fibonacci = (n) => {
    if (n <= 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))