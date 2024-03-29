// write a function called countCjar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears int the string.

const countCharMap = (word, char) => {
  word = word.toLowerCase().split("");
  char = char.toLowerCase();
  let count = 0;
  const value = word.map((x) => {
    if (x == char) {
      count++;
    }
  });
  return count;
};

const countCharFilter = (word, char) => {
  char = char.toLowerCase();
  if (word != "") {
    let count = word
      .toLowerCase()
      .split("")
      .filter((ele) => ele == char).length;

    if (count > 0) {
      return count;
    } else {
      return "No match found";
    }
  } else {
    return "No string found";
  }
};

const countCharReduce = (word, char) => {
  if (word == "") {
    return "No string found";
  }
  word = word.toLowerCase();
  char = char.toLowerCase();
  count = word.split("").reduce((accum, currChar) => {
    if (currChar == char) {
      accum++;
    }
    return accum;
  }, 0);
  return count;
};

console.log(
  countCharMap("MissIssippi", "i") //output: 4
);
console.log(
  countCharFilter("MissIssippi", "U") //output: No match found
);
console.log(
  countCharReduce("", "I") //output: No string found
);

// Constraints:
// The funtion should be case-sensitive.
// The funtion should handle both lowercase and uppercase characters.
// The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).
