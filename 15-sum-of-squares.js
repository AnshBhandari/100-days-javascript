// Write a function to calculate the sum of squares of all elements in an array. 
// for example, given the array [1, 2, 3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9

const sumOfSquares_1 = (arr) => {
    return arr.reduce((accum, curValue) => (accum += curValue * curValue), 0);
}

const sumOfSquares_2 = (arr) => {
    let sum = 0;
    for (num of arr)
    {
        sum += num * num;
    }
    return sum;
}



console.log(sumOfSquares_1([1, 2, 3]));  // 14
console.log(sumOfSquares_2([1, 2]));     // 5