let N = 12321;

let str = N.toString();
let isPalindrome = str === str.split('').reverse().join('');

console.log("Число " + N + (isPalindrome ? " является палиндромом." : " не является палиндромом."));