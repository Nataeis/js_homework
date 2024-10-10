let n = 4;
let res = 1;
function factorial(num1, res) {
  for (let i = 1; i <= num1; i++) {
    res *= i;
  }
  console.log(res);
}
factorial(n, res)