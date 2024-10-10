let N = 12321;

function isPalindrome(num) {
    let str = num.toString();
    let isPalindrome = str === str.split('').reverse().join('');

    console.log("Число " + N + (isPalindrome ? " является палиндромом." : " не является палиндромом."));
}
isPalindrome(N);