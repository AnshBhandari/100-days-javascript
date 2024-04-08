// Write a function that takes a string as input and returns the count of vowels in that string.
// Consider 'a', 'e', 'i', 'o' and 'u' as vowels (both lowercase and uppercase).

const countVowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = str.split('');
    let count = 0;
    for (let char of arr)
    {
        if (vowels.includes(char.toLowerCase()))
        count += 1;
    }
    return count;
}

console.log(countVowels("Hello world"));
console.log(countVowels("Ansh Bhandari"));
console.log(countVowels("Js series"));

// Constraints:

// The input string may contain letters in both uppercase and lowercase.
// The output should be a non-negative integer repewsenting the count of vowels in the input string.