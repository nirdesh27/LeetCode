let inputString = "hello world";
const words = inputString.trim().split(/\s+/); // this splits array into array of strings

// Initialize the length of the last word to 0
let lastWordLength = 0;
console.log("_____ ",words);
// Iterate through each word in the array
lastWordLength = words[words.length-1].length;
console.log("_________ length _______ ",lastWordLength);