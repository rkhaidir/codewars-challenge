/**
 * Coding Challenge
 * https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
 *  */ 

function bmi(weight, height) {
  const bmi = weight / (Math.pow(height, 2));
  
  if (bmi <= 1.85) return "Underweight";
  else if (bmi>= 1.86 && bmi <= 25.0) return "Normal";
  else if (bmi >= 25.1 && bmi <= 30.0) return "Overweight";
  else return "Obese";
}

console.log(bmi(80, 1.80));