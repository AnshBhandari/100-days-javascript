// Write a javascript function findMedian (arr) that takes an array or numbers as input and returns the median CSSMathValue. If the array has an even numbers of elements, return the average of the two middle values.

// For example, the median of 3, 3, 5, 9, 15 is 5.

// If there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle values:so the median 3, 5, 7, 9 is (5 + 7)/2 = 6.

// Sort the array in ascending order.
// If the array has an odd number of elements, the median is the middle elements.
// If the array has an even number of elements, the median is the average of the two middle elements.

const findMedian = (arr) => {
    // if (arr.length === 0)
    // {
    //     return 0;
    // }

    arr.sort((a, b) => a - b);
    let len = arr.length;
    let mid = Math.floor(len/2);
    if (len % 2 === 0)
    {
        return (arr[mid] + arr[mid - 1]) / 2;
    }
    return arr[mid];
}

console.log(findMedian([5, 3, 9, 1, 7]));      // 5
console.log(findMedian([2, 4, 6, 8]));         // 5
console.log(findMedian([1, 3, 5, 7, 9, 11]));  // 6
