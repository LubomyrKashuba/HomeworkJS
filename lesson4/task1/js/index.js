let password = prompt("Enter your password here please");
let count = 4;

if (password === "it is me") {
  alert("WELCOME");
}
while (password != "it is me" && count > 0) {
  password = prompt(`${count} attempts left`);
  count--;
  if (count === 0) {
    alert("please try later");
  } else if (password === "it is me") {
    alert("WELCOME");
  }
}
