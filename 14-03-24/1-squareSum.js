/**
 * Coding Challenge
 * https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
 *  */ 

// function squareSum(numbers) {
//   let result = 0;
//   for(let i = 0;i < numbers.length; i++) {
//     result = result + Math.pow(numbers[i], 2);
//   }
//   return result;
// }

const squareSum = (numbers) => {
  let result = 0;
  numbers.forEach((num) => {
    result = result + Math.pow(num, 2);
  });
  return result;
}

// [1, 2] => 5
console.log(squareSum([1, 2]));