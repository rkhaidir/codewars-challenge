/**
 * Coding Challenge
 * https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
 *  */ 

// function repeatStr (n, s) {
//   let letter = '';
//   for (let i=0; i<n; i++) {
//     letter = letter + s;
//   }
//   return letter;
// }

const repeatStr = (n, s) => s.repeat(n);

/**
 * 6, "I"     -> "IIIIII"
 * 5, "Hello" -> "HelloHelloHelloHelloHello"
 */
console.log(repeatStr(5, "Hello"));