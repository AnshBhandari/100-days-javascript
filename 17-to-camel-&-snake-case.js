// Write a function to convert a string to camelCase & snake_case

const toCamelCase = (str) => {
  return str
    .trim()
    .split(" ")
    .map((curElem, index) => {
      if (index === 0) {
        return curElem.toLowerCase();
      } else {
        return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
      }
    })
    .join("");
};

const to_snake_case = (str) => {
  return str
    .trim()
    .split(" ")
    .map((curElem, index) => {
      return curElem.toLowerCase();
    })
    .join("_");
};

console.log(toCamelCase("My name is Ansh Bhandari"));
console.log(to_snake_case("My name is Ansh Bhandari"));
