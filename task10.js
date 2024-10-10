let N = 5;
let sum = 0;

function sqr(a, b) {
    for (let i = 1; i <= a; i++) {
        b += i * i;
    }

    console.log("Сумма квадратов чисел от 1 до " + a + " равна " + b);
}
sqr(N, sum);