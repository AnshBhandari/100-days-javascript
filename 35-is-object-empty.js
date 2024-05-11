// Write a function isEmptyObject that takes an object as input and determines whether it is empty or not. An empty object is defined as an object with no own properties.

// Your task is to implement the isEmptyObject function using JavaScript and returns a message indicating whether the object is empty or not.

// Constraints:

// The input object may have any number of properties, including zero.
// The function should return a message indicating whether the object is empty or not.
// You should use the provided isEmptyObject function signature without any additional parameters.

// const isEmptyObject = (obj) => {
//     // return obj.length === 0 ? `it is empty` : `it's not empty`
//     for (let key in obj)
//     {
//         if (obj.hasOwnProperty(key))
//         {
//             return `it's not empty`;
//         }
//     }
//     return `it's empty`;
// }

const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
}

console.log(isEmptyObject({ name: "ansh" }));
console.log(isEmptyObject({}));
console.log(isEmptyObject({ keyWithNull: null }));
console.log(isEmptyObject({ keyWithUndefined: undefined}));
