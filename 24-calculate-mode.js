// Write a function that takes an input as array of numbers as input and return the mode of the array (the number that appears most frequently).

const calculateMode = (arr) => {
    let counts = {};
    let maxNum = 0;
    let mode; 
    for (let element of arr)
    {
        counts[element] = (counts[element] || 0) + 1;
        if (counts[element] > maxNum)
        {
            maxNum = counts[element];
            mode = element;
        }
    }
    return mode;
}

console.log(calculateMode([1, 2, 2, 3, 1, 4, 2]));

// Constraints:
// The input array will always contain at least own element.
// The mode will always be unique (i.e., there won't be multiple numbers with the same highest frequency).