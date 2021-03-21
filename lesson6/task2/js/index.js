let n = prompt("enter quantity elements");
let q = prompt("enter the denominator");

//ПЕРШИЙ СПОСІБ
let str = "";
let sum = 0;
const f2 = (n, q) => {
  let c = 1;
  sum = 1 * ((1 - q ** n) / (1 - q));
  for (let i = 1; i < n; i++) {
    str = str + `+${(c = c * q)}`;
  }
  return `1${str}=${sum}`;
};
console.log(f2(n, q));

// // ДРУГИЙ СПОСІБ
// const sequence = function (a, b) {
//   let str = "";
//   let c = 1;
//   let sum = 0;
//   for (let i = 1; i <= a; i++) {
//     str = str + `+${c}`;
//     sum = sum + c;
//     c = c * b;
//   }
//   return `1${str}=${sum}`;
// };

// console.log(sequence(n, q));

// // ТРЕТІЙ СПОСІБ
// let c = 1;
// const f = function (a, b) {
//   console.log(c);
//   if (a === 1) {
//     return 1;
//   } else {
//     c = c * b;
//     return c + f(a - 1, b);
//   }
// };

// console.log(`сумма = ${f(n, q)}`);
