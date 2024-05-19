// Write a function fizzbuzz that accepts two numbers, startNum and endNum, as input. The function should return an array containing numbes and specific strings based on the following rules:

// for each number i in range from startNum to endNum (both inclusicve):
// If i is divisible by both 3 and 5, include fizzbuzz in the result.
// If i is divisible by only 3, include fizz in the result.
// If i is divisible by 5 only, include buzz in the result.
// Otherwise include the number i itself.
const fizzBuzz = (num1, num2) => {
    let result = [];
    for (let i = num1; i <= num2; i++)
    {
        if (i % 3 === 0 && i % 5 === 0)
            result.push("FizzBuzz");
        else if (i % 3 === 0)
            result.push("Fizz");
        else if (i % 5 === 0)
            result.push("Buzz"); 
        else 
            result.push(i);
    }
    return result;
}

console.log(fizzBuzz(1, 15));
console.log(fizzBuzz(12, 20));