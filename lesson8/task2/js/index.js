let a = prompt("enter email");
if (a.indexOf("@") == -1) {
  alert("wrong");
} else {
  if (a.startsWith("@") || a.endsWith("@")) {
    alert("wrong");
  } else {
    alert("good job");
  }
}
