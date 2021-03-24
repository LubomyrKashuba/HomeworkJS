let a = prompt("enter url address");

if (a.startsWith("http://")) {
  let b = a.slice(7);
  alert(b);
}

if (a.startsWith("https://")) {
  let b = a.slice(8);
  alert(b);
}
