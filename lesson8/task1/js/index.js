let a = prompt("enter some text here");
let count = 0;
let b = 0;
while (true) {
  let res = a.indexOf(" ", count);
  if (res == -1) break;
  else {
    b++;
  }
  count = res + 1;
}
console.log(b);
