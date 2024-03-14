/**
 * Coding Challenge
 * https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
 *  */ 

// function betterThanAverage(classPoints, yourPoints) {
//   let sum = 0;
//   classPoints.forEach(element => {
//     sum = sum + element;
//   });

//   return (sum / classPoints.length) < yourPoints ? true : false;
// }

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((total, sum) => total + sum, 0) / classPoints.length; 
}

// [2, 3], 5 => true
console.log(betterThanAverage([2, 3], 5));