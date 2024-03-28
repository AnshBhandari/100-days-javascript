// Question
// Write a funtion findLongestWord that takes a string as a input and returns the longest word in the string. If there are multiple longest words, return the first one encountered

// Constraints
// The input string may contain alphabetic characters, digits, spaces and punctuation

// The input string is non-empty

// The input string may contain multiple words separated by spaces

// Note:
// If the input string is empty or contains only whitespaces, the funtion should return an false
// The funtion should ignore leading and trailing whitespaces when determinig the target word

const findLongestWord1 = (str) => {
  if (str.trim === 0) {
    return false;
  }
  // console.log(str);
  words = str.split(" ");
  words = words.sort((a, b) => a.length - b.length);
  return words.at(-1);
  // words = words.sort((a, b) => b.length - a.length);
  // return words.at(0);
};

const findLongestWord2 = (str) => {
  if (str.trim === 0) {
    return false;
  }
  words = str.split(" ");
  return words.reduce(
    (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
    ""
  );
};

console.log(
  findLongestWord1(
    "I am Ansh Bhandari a Computer Science Engineering student who took part in 100 days of js coding challenger"
  )
);

console.log(
  findLongestWord2(
    "I am Ansh Bhandari a Computer Science Engineering student who took part in 100 days of js coding challenger"
  )
);