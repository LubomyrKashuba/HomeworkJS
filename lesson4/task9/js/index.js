let n = prompt("enter an integer");
let pow = prompt("enter a pow");
let result = 1;
let i = 1;
let a = pow;
if (pow < 0) {
  pow = -pow;
}
do {
  result = result * n;
  i++;
} while (i <= pow);
if (a < 0) {
  result = 1 / result;
}
console.log(result);
