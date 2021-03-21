let simpleNumber = true;
const f = (a, b) => {
  let change;
  if (a > b) {
    change = a;
    a = b;
    b = change;
  }
  for (let i = a; i < b; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        simpleNumber = false;
        break;
      } else {
        simpleNumber = true;
      }
    }
    if (simpleNumber === true) {
      simpleNumber = i;
    } else {
      continue;
    }
    console.log(simpleNumber);
  }
};
// const q = prompt("enter the first number");
// const d = prompt("enter the second number");

f(14, 25);
