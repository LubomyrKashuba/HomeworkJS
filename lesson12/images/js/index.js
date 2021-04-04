let box = document.getElementsByClassName("box");
let body = document.body;
body.style.display = "flex";
body.style.alignItems = "center";
body.style.height = "100vh";
for (let i = 0; i < box.length; i++) {
  box[i].style.height = "400px";
  box[i].style.width = "400px";
  box[i].style.margin = "auto";
  box[i].style.border = "4px solid black";
  box[i].addEventListener("click", () => {
    box[i].style.backgroundImage = `url(${prompt("write url image")})`;
    box[i].style.backgroundSize = "cover";
  });
}
