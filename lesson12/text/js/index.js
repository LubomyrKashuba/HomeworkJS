document.body.style.fontSize = "40px";
document.body.style.padding = "100px";
const ul = document.getElementsByTagName("ul");
const li = document.getElementsByTagName("li");

ul[0].style.listStyleType = "decimal";

li[0].addEventListener("click", () => {
  li[0].style.color = "red";
});

li[1].addEventListener("click", () => {
  li[1].style.color = "yellow";
});

li[2].addEventListener("click", () => {
  li[2].style.color = "green";
});

li[3].addEventListener("click", () => {
  li[3].style.color = "blue";
});

li[4].addEventListener("click", () => {
  li[4].style.color = "orange";
});

li[5].addEventListener("click", () => {
  li[5].style.color = "gray";
});
