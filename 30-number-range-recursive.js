// Write a function called numberRangeRecursive that genenrates an array containg consecutive numebrs from a to b (inclusive).


// Output: An array containing consecutive numebrs from a to b (inclusive).

// Constraints:
// a and b will be integers.
// a will be less than or equal to b.


const numberRangeRecursive = (a, b, arr = []) => {
    if (a<=b)
    {
        arr.push(a);
        return numberRangeRecursive(++a, b, arr);
    }
    return arr;b
}

console.log(numberRangeRecursive(0, 5));
console.log(numberRangeRecursive(3, 7));