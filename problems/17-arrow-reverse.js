/***********************************************************************
Write a function arrowReverseString(str) that accepts a string and returns that string
reversed. 

Write this function using a fat arrow function!

Examples:
let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"


***********************************************************************/

const arrowReverseString = str => {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    reversed += char;
  }

  return reversed;
}

// One liner style code:
// const arrowReverseString = str => str.split('').reverse().join('');

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/

try {
  module.exports = arrowReverseString;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
