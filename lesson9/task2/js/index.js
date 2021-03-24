let a = prompt("write a number");

let getSqrt = (n) => {
  if (isNaN(n)) {
    alert("have to write a number");
  } else if (n < 0) {
    alert("write positive number");
  } else if (n === "") {
    alert("please write a number");
  } else {
    alert(Math.sqrt(n));
  }
};

getSqrt(a);
