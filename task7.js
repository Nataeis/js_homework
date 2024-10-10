let N = 12345;
let reversed = 0;

function reverse(a, b) {
    while (a > 0) {
        b = b * 10 + a % 10;
        a = (a / 10) | 0;
    }

    console.log(b);
}

reverse(N, reversed);