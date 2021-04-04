let box = document.getElementsByClassName("box");
box[0].style.height = "300px";
box[0].style.width = "300px";
box[0].style.backgroundColor = "violet";
box[0].style.margin = "auto";
box[0].style.border = "4px solid black";

box[0].onmouseout = function () {
  box[0].style.backgroundColor = "violet";
};

let i = 0;

box[0].addEventListener("mouseover", () => {
  if (i === 0) {
    box[0].style.backgroundColor = "green";
  }
  if (i === 1) {
    box[0].style.backgroundColor = "red";
  }
  if (i === 2) {
    box[0].style.backgroundColor = "black";
    i = -1;
  }
  i++;
});