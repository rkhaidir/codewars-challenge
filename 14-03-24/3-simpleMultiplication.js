/**
 * Coding Challenge
 * https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
 *  */ 

// function simpleMultiplication(number) {
//   return number%2 === 0 ? number*8 : number*9;
// }

const simpleMultiplication = (number) => number%2 === 0 ? number*8 : number*9;

/**
 * 2*8 = 16
 * 3*9 = 27
 */
console.log(simpleMultiplication(3));