let box = document.getElementsByClassName("box");
box[0].style.height = "300px";
box[0].style.width = "300px";
box[0].style.backgroundColor = "violet";
box[0].style.margin = "auto";
box[0].style.border = "4px solid black";

box[0].onmouseout = function () {
  this.style.backgroundColor = "violet";
};

let i = 0;

if (i === 0) {
  
  
  box[0].addEventListener("mouseover", () => {
    box[0].style.backgroundColor = "yellow";
    i = 1;
    
  });
  i=1;
}
if (i === 1) {
  i = 2;
  box[0].addEventListener("mouseover", () => {
    box[0].style.backgroundColor = "green";
    
    if (i === 2) {
      i = 3;
      box[0].addEventListener("mouseover", () => {
        box[0].style.backgroundColor = "orange";

        if (i === 3) {
          i = 4;
          box[0].addEventListener("mouseover", () => {
            box[0].style.backgroundColor = "black";

            if (i === 4) {
              box[0].addEventListener("mouseover", () => {
                box[0].style.backgroundColor = "red";
              });
            }
          });
        }
      });
    }
  });
}
