// Question:
// Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the tupe of triangle: "equilateral", "isosceles", or "scalene" 

const checkTriangle = (s1, s2, s3) => {
    if (s1 === s2 && s2 === s3)
    {
        return "equilateral";
    }
    else if (s1 !== s2 && s2 !== s3 && s3 !== s1)
    {
        return "scalene";
    }
    else {
        return "isosceles";     // s1 === s2 || s2 === s3 || s3 === s1
    }
}


console.log(checkTriangle(3, 3, 3));
console.log(checkTriangle(3, 4, 3));
console.log(checkTriangle(5, 8, 6));

// todo The function should adhere to the follwing rules:

// If all three sides are of equal length, return "equilateral".
// If only two sides are of equal length, return "isosceles".
// If all three sides have different lengths, return "scalene".
