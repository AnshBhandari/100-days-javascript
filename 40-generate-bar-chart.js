// Create a function generateBarChart that takes an array of numbers and generates a simple text-based bar chart.

const generateBarChart1 = (arr) => {
    const newArr = arr.map((curElem, index) => {
        let star = "";
        let number = 0;
        while (number < curElem) 
        {
            star = star + '*';
            number++;
        }
        return `${index + 1}: ${star}`;
    })
    return newArr.join("\n");
};

const generateBarChart2 = (arr) => {
    return arr.map((curElem, index) => {
        return `${index + 1}: ${"*".repeat(curElem)}`;
    }).join("\n");
};

console.log(generateBarChart1([5, 3, 9, 2]));
console.log(generateBarChart2([15, 30, 19, 20]));
