/**
 * Coding Challenge
 * https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
 *  */ 

// function booleanToString(b){
//   return typeof b === "boolean" ? b.toString() : '';
// }

const booleanToString = b => typeof b === "boolean" ? b.toString() : '';


/**
 * true => "true"
 * false => "false"
 */
console.log(booleanToString(false));