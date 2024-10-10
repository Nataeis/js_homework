let n = 10;
let isPrime = true;

function prime_number(n, isPrime) {
    if (n === 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime === true) {
        console.log("число " + n + " является простым ");
    } else {
        console.log("число " + n + " не является простым ");
    }
}
prime_number(n, isPrime);