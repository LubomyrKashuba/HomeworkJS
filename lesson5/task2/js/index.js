function simpleNumber(a) {
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return console.log(`${a} is not a simple number`);
    }
  }
  return console.log(`${a} simple number`);
}
simpleNumber(prompt("Enter an integer"));
