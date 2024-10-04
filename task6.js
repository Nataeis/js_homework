let N = 12345; 
let sum = 0;

let digits = N.toString();

for (let i = 0; i < digits.length; i++) {
  sum += parseInt(digits[i]);
}

console.log("Сумма цифр числа " + N + " равна " + sum);