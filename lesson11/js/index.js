let link = document.getElementsByTagName("a");
for (i = 0; i < link.length; i++) {
  let setLink = prompt(`enter your ${i + 1} link `);
  let str = "";
  str = str.concat("http://www.", `${setLink}`);
  link[i].href = str;
  link[i].innerHTML = setLink;
}
//1 TASK
let bg = prompt("enter a color of background");
let body = document.getElementById("body");
body.style.backgroundColor = bg;

//2 TASK
let font = prompt("enter a font style", "Arial, Arial Black, Comic Sans MS");
body.style.fontFamily = font;

//3 TASK
let lH = prompt("enter text-align for Headings");
let H1 = document.getElementsByTagName("h1");
H1[0].style.textAlign = lH;

//4 TASK
let paragraphBackgroundColor = prompt(
  "enter a color of background for paragraph"
);
let p = document.getElementsByTagName("p");
p[0].style.backgroundColor = paragraphBackgroundColor;

//5 TASK
let textColor = prompt("enter a color for text");
let linkColor = prompt("enter a color for links");
p[0].style.color = textColor;
let links = document.getElementsByClassName("a");
for (let i = 0; i < links.length; i++) {
  links[i].style.color = linkColor;
}

//6 TASK
let color = prompt("enter color for text");
let size = prompt("enter font size");
let weight = prompt("enter weight for text");
let div = document.getElementsByTagName("div");
div[0].style.color = color;
div[0].style.fontSize = size;
div[0].style.fontWeight = weight;

//7 TASK
let listStyle = prompt("enter list style");
let list = document.getElementsByTagName("li");
for (let i = 0; i < list.length; i++) {
  list[i].style.listStyleType = listStyle;
}
