let h = document.getElementsByTagName("h2");
let box = document.getElementsByTagName("div");

h[0].addEventListener("click", () => {
  box[0].setAttribute("class", "box");
  box[0].removeAttribute("id");
  document.querySelector("#img1").setAttribute("class", "one");
  document.querySelector("#img1").removeAttribute("id");

  document.querySelector("#img2").setAttribute("class", "two");
  document.querySelector("#img2").removeAttribute("id");

  document.querySelector("#img3").setAttribute("class", "three");
  document.querySelector("#img3").removeAttribute("id");

  document.querySelector("#img4").setAttribute("class", "four");
  document.querySelector("#img4").removeAttribute("id");

  document.querySelector("#img5").setAttribute("class", "five");
  document.querySelector("#img5").removeAttribute("id");

  document.querySelector("#img6").setAttribute("class", "six");
  document.querySelector("#img6").removeAttribute("id");

  document.querySelector("#img7").setAttribute("class", "seven");
  document.querySelector("#img7").removeAttribute("id");

  document.querySelector("#img8").setAttribute("class", "eight");
  document.querySelector("#img8").removeAttribute("id");

  document.querySelector("#img9").setAttribute("class", "nine");
  document.querySelector("#img9").removeAttribute("id");
});

h[1].addEventListener("click", () => {
  box[0].setAttribute("id", "box1");
  box[0].removeAttribute("class");
  document.querySelector(".one").setAttribute("id", "img1");
  document.querySelector(".one").removeAttribute("class");

  document.querySelector(".two").setAttribute("id", "img2");
  document.querySelector(".two").removeAttribute("class");

  document.querySelector(".three").setAttribute("id", "img3");
  document.querySelector(".three").removeAttribute("class");

  document.querySelector(".four").setAttribute("id", "img4");
  document.querySelector(".four").removeAttribute("class");

  document.querySelector(".five").setAttribute("id", "img5");
  document.querySelector(".five").removeAttribute("class");

  document.querySelector(".six").setAttribute("id", "img6");
  document.querySelector(".six").removeAttribute("class");

  document.querySelector(".seven").setAttribute("id", "img7");
  document.querySelector(".seven").removeAttribute("class");

  document.querySelector(".eight").setAttribute("id", "img8");
  document.querySelector(".eight").removeAttribute("class");

  document.querySelector(".nine").setAttribute("id", "img9");
  document.querySelector(".nine").removeAttribute("class");
});
document.getElementsByTagName("div")[1].addEventListener("click", () => {
  if (document.getElementsByTagName("div")[1].hasAttribute("class")) {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "violet";
  } else {
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage = "url(img/1.jpg)";
    document.body.style.backgroundSize = "cover";
  }
});
document.getElementsByTagName("div")[2].addEventListener("click", () => {
  if (document.getElementsByTagName("div")[2].hasAttribute("class")) {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage = "url(img/2.jpg)";
    document.body.style.backgroundSize = "cover";
  }
});
document.getElementsByTagName("div")[3].addEventListener("click", () => {
  if (document.getElementsByTagName("div")[3].hasAttribute("class")) {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "turquoise";
  } else {
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage = "url(img/3.jpg)";
    document.body.style.backgroundSize = "cover";
  }
});
document.getElementsByTagName("div")[4].addEventListener("click", () => {
  if (document.getElementsByTagName("div")[4].hasAttribute("class")) {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "tomato";
  } else {
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage = "url(img/4.jpg)";
    document.body.style.backgroundSize = "cover";
  }
});
document.getElementsByTagName("div")[5].addEventListener("click", () => {
  if (document.getElementsByTagName("div")[5].hasAttribute("class")) {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "#0a043c";
  } else {
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage = "url(img/5.jpg)";
    document.body.style.backgroundSize = "cover";
  }
});
document.getElementsByTagName("div")[6].addEventListener("click", () => {
  if (document.getElementsByTagName("div")[6].hasAttribute("class")) {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "#03506f";
  } else {
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage = "url(img/6.jpg)";
    document.body.style.backgroundSize = "cover";
  }
});
document.getElementsByTagName("div")[7].addEventListener("click", () => {
  if (document.getElementsByTagName("div")[7].hasAttribute("class")) {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "#a3ddcb";
  } else {
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage = "url(img/7.jpg)";
    document.body.style.backgroundSize = "cover";
  }
});
document.getElementsByTagName("div")[8].addEventListener("click", () => {
  if (document.getElementsByTagName("div")[8].hasAttribute("class")) {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "#ffe3de";
  } else {
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage = "url(img/8.jpg)";
    document.body.style.backgroundSize = "cover";
  }
});
document.getElementsByTagName("div")[9].addEventListener("click", () => {
  if (document.getElementsByTagName("div")[9].hasAttribute("class")) {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "#ffb037";
  } else {
    document.body.style.backgroundColor = "";
    document.body.style.backgroundImage = "url(img/9.jpg)";
    document.body.style.backgroundSize = "cover";
  }
});
