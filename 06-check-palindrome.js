// Write a function to determine whether a given string is a pallindrome or not. 
// A pallindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuations, and capitalization.

const isPallilndrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, "");     // W will remove everything except words while w will replace words only from string.
    let r_str = str.split("").reverse().join("");
    // console.log(r_str);
    return str === r_str;
}


console.log(
    isPallilndrome("A man, a plan, a canal, Panama")
);
console.log(
    isPallilndrome("Racecar")
);
console.log(
    isPallilndrome("hello")
);

// The input string may contain letters, digits, spaces, punctuation, and special characters.
// The function should be case in-sensitive, meaning, "Racecar" and "racecar" should be considered same.
// Ignore spaces, punctuation, and special characters when determining if a string is a pallindrome.
// The function should return true if the input string is a pallindrome and false otherwise. 

// Note
// .replace(/\W/g, ""): Use the replace() method with a regular expression (/\W/g) to remove all non-word characters from the starting. Here:
// \W matches any non-word character (equivalentto [^a-zA-Z0-9_]).
// The g flag performs a global serach, meaning it replaces all occurences of non-word characters in the string.
// So, replace(/\W/g, "") replace all non-word characters with an empty string, effectively removing them from the string.