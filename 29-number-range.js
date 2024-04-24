// Write a function called numberRange that generates an array containing consecutive numbers from a to b (inclusive).

// Input:
// a: An integer representing the starting number of the range.
// b: An integer representing the ending number of the range.
// arr: An optional parameter representing the array to store the numebes in the range. It defaults to an empty array.

// Output: An array containing consecutive numebrs from a to b (inclusive).

// Constraints:
// a and b will be integers.
// a will be less than or equal to b.

const numberRange = (a, b, arr = []) => {
    let arr = [];
    while(a <= b)
    {
        arr.push(a);
        a++;
    }
    return arr;
}

console.log(numberRange(0, 5));
console.log(numberRange(3, 7));