/**
 * Coding Challenge
 * https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript
 *  */ 

// function paperwork(n, m) {
//   if (n < 0 || m < 0) {
//     return 0;
//   } else {
//     return n*m;
//   }
// }

const paperwork = (n, m) => n < 0 || m < 0 ? 0 : n*m;

/**
 * n= 5, m=5: 25
 * n=-5, m=5:  0
 */
console.log(paperwork(5, 5));