let box = document.getElementsByClassName("box");
box[0].style.boxSizing = "border-box";
box[0].style.height = "400px";
box[0].style.width = "400px";
box[0].style.margin = "auto";
box[0].style.border = "8px ridge orange";
box[0].style.background = "#991e9c";
box[0].innerText = "I have a secret";
box[0].style.fontSize = "30px";
box[0].style.textAlign = "center";

box[0].addEventListener("mouseover", () => {
  box[0].style.background = "yellow";
  box[0].innerText = "Do you want to know it?";
  box[0].style.color = "blue";
});
box[0].addEventListener("mouseout", () => {
  box[0].style.background = "#991e9c";
  box[0].innerText = "I have a secret";
  box[0].style.color = "black";
});

box[0].addEventListener("mousedown", () => {
  box[0].style.background = "black";
  box[0].innerText = "I won't tell you";
  box[0].style.color = "white";
});

box[0].addEventListener("mouseup", () => {
  box[0].style.background = "yellow";
  box[0].innerText = "Do you want to know it?";
  box[0].style.color = "blue";
});
