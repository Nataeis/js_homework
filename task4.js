let N = 8;
let isPrime = true;

if (N === 1) {
  isPrime = false;
} else {
  for (let i = 2; i < N; i++) {
    if (N % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Число " + N + " простое");
} else {
  console.log("Число " + N + " не является простым");
}