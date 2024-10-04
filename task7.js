let N = 12345;
let reversed = 0;

while (N > 0) {
  reversed = reversed * 10 + N % 10;
  N = (N / 10) | 0;
}

console.log(reversed);