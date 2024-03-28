// You are required to implement a function generateHash that generates a hash tag from a given input string.
// The hash tag should be constructed as follow:

// The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.

// If the length of the input string is greate than 280 characters or if the input string is empty or contains only whitespace, the funtion should return false.
// Otherwise, the function should return the generated hash tag prefixed with #.

const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }
  str.trim();
  let strArr = str.split(" ");
  strArr = strArr.map((curElem) =>
    curElem.replace(curElem[0], curElem[0].toUpperCase())
    // curElem.charAt(0).toUpperCase() + curElem.slice(1)
  );
  str = `#${strArr.join("")}`;
  return str
};


const generateHash1 = (str) => {
    strArr = str.split(" ");
    for(let i = 0; i < strArr.length; i++)
    {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    str = `#${strArr.join("")}`;
    return str;  
}

console.log(generateHash("my name is ansh bhandari"));
console.log(generateHash1("my name is ansh bhandari"));