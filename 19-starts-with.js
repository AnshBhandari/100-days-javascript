//? Write a function to check if a given string starts with a specific substring

const myStartsWith_1 = (str, subStr) => {
    return str.toLowerCase().startsWith(subStr.toLowerCase());
}

const myStartsWith_2 = (str, subStr) => {
    return str.slice(0, subStr.length).toLowerCase() === subStr.toLowerCase();
}

console.log(myStartsWith_1("Hello World", "hello"));  // true
console.log(myStartsWith_2("Ansh Bhandari", "Ansh")); // true


// ? str: A string (e.g., "Ansh Bhandari").
// ? subStr: A substring to check if it starts the given string (e.g., "Ansh").
// ? Output: true if the given string starts with the specified substring, otherwise false.

