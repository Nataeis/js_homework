let n = 100;
function numbers(num1) {
  for (let i = 1; i <= num1; i++) {
    if (i % 2 === 0) {
      console.log(i + " чётное");
    }
    else {
      console.log(i + " нечётное");
    }
  }
}
numbers(n);