let n = 125;
let sum = 0;

function amoun(num1, num2) {
    let digits = num1.toString();
    for (let i = 0; i < digits.length; i++) {
        num2 += parseInt(digits[i]);
    }
    console.log("Сумма цифр числа " + num1 + " равна " + num2);
}
amoun(n, sum);