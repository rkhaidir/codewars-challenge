/**
 * Coding Challenge
 * https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
 *  */ 

// function grow(x){
//   let result = 1;
//   x.forEach((num) => {
//     result = result * num;
//   });
//   return result;
// }

const grow = x => x.reduce((a, b) => a*b);

// [1, 2, 3] => 1 * 2 *3 = 6
console.log(grow([1, 2, 3, 4]));