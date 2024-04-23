// Write function called truncateString that takes two parameters:

// str: A string that needs to be truncated.
// maxLength: An integer representing the maximum length of the string allowed.
// The function should truncate the inpu tstring str if its length exceeds the specified maxLength. If truncate occurs, the function should add '...' to the end of the truncated string.

const truncateString = (str, count) => {
    // if (count <= 0)
    // {
    //     return str;
    // }
    // else 
    // {
    //     if (str.length > count)
    //     {
    //         return str.slice(0, count).concat('...');
    //     }
    // }

    return count <= 0 ? str : str.slice(0, count).concat('...'); 
}

console.log(truncateString("A-ticket a-tasket A gree and yellow basket", 0));
// 'A-tisket...'

// Constraints:
// The input string will contain only alphanumeric characters and punctuation marks.
// The maximum length maxLength will be a positive integer.
// The output string length should not exceed maxLength + 3 characters due to the addition of '...'.