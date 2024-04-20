// ? Write a function to calculate factorial of a number. (using recursion)

// ? Recursion:
// It is a programming technique where a function calls itself in order to solve a problem.
// In essence, it's a function that calls itself with smaller or simpler input until it reaches a base case.

// ? Base Case:
// The base case is condition in recursive function that stops the recursion.
// It's the point at which the function stops calling itself and return a value without further recursion.
// Without a base case, the recursive function would continue calling itself indefinitely, leading to what's known as infinite recursion.

// ? Recursive Case:
// The recursive case is the condition in a resursive function that determines when the function should call itself again.
// It's typically an expression or condition that evaluates to true for certain inputs, indicating that further recursion is necessary to solve problem.
// Each recursive call should move close toward the base case, eventually leading to the termination of the recursion.

const factorial = (n) => {
    if (n <= 1)
    {
        return n;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));