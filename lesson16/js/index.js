let t = document.getElementsByClassName("top");
let bot = document.getElementsByClassName("bot");
let area = document.getElementById("area");
let botStyle = document.getElementsByClassName("bot-style");
let botEdit = document.getElementsByClassName("bot-edit");
let choose = document.querySelector("#add");
let mid = document.getElementsByClassName("mid");

//Buttons
let edit = document.getElementsByClassName("edit");
let save = document.getElementsByClassName("save");
let add = document.getElementsByClassName("add");
let style = document.getElementsByClassName("style");
let colorText = document.getElementsByClassName("color-text");
let bgColor = document.getElementsByClassName("bg-color");
let colors = document.getElementsByClassName("colors");
let color = document.getElementsByClassName("color");
let colors1 = document.querySelector("#colors");
let createTable = document.querySelector(".create-table");
let createList = document.querySelector(".create-list");

edit[0].addEventListener("click", () => {
  botStyle[0].style.visibility = "hidden";
  botEdit[0].style.visibility = "visible";
  area.value = t[0].innerHTML;
});

save[0].addEventListener("click", () => {
  t[0].innerHTML = area.value;
  botEdit[0].style.visibility = "hidden";
});

style[0].addEventListener("click", () => {
  botStyle[0].style.visibility = "visible";
  botEdit[0].style.visibility = "hidden";
});
add[0].addEventListener("click", () => {
  t[0].style.visibility = "hidden";
  bot[0].style.visibility = "hidden";
  mid[0].style.visibility = "hidden";
  botEdit[0].style.visibility = "hidden";
  choose.style.visibility = "visible";
});

//Colors
colorText[0].addEventListener("click", () => {
  colors1.classList.toggle("text");
});
const textColor = function () {
  if (colors1.classList.contains("text")) {
    t[0].style.color = this.id;
    colors1.classList.remove("text");
  }
};

bgColor[0].addEventListener("click", () => {
  colors1.classList.toggle("colors");
});
const colorBg = function () {
  if (colors1.classList.contains("colors")) {
    t[0].style.backgroundColor = this.id;
    colors1.classList.remove("colors");
  }
};

for (let i = 0; i < color.length; i++) {
  color[i].addEventListener("click", textColor);
  color[i].addEventListener("click", colorBg);
}

// Forms
let f1 = document.forms.f1;
const fontSizeChange = function () {
  t[0].style.fontSize = this.value;
};
for (let i = 0; i < f1.length; i++) {
  f1[i].onclick = fontSizeChange;
}

let f2 = document.forms.f2;
f2.fonts.onchange = function () {
  for (let i = 0; i < f2.fonts.options.length; i++) {
    if (f2.fonts.options[i].selected) {
      t[0].style.fontFamily = this.value;
    }
  }
};

let f3 = document.forms.f3;
f3.cursive.addEventListener("click", function () {
  if (this.checked) {
    t[0].style.fontStyle = "italic";
  } else {
    t[0].style.fontStyle = "normal";
  }
});

f3.bold.addEventListener("click", function () {
  if (this.checked) {
    t[0].style.fontWeight = "bold";
  } else {
    t[0].style.fontWeight = "normal";
  }
});

let f4 = document.forms.f4;

//Table
let table = document.querySelector(".table");
f4[0].onclick = function () {
  table.style.visibility = "visible";
  choose.style.height = "570px";
  list.style.visibility = "hidden";
};

let tr = document.querySelector("#tr");
let td = document.querySelector("#td");
let heightTd = document.querySelector("#height");
let widthTd = document.querySelector("#width");
let widthBorder = document.querySelector("#wborder");

let f7 = document.forms.f7;
let typeBorder;
f7.type.onchange = function () {
  for (let i = 0; i < f7.type.options.length; i++) {
    if (f7.type.options[i].selected) {
      typeBorder = this.value;
    }
  }
};

let colorBorder;
f7.borderColor.onchange = function () {
  for (let i = 0; i < f7.borderColor.options.length; i++) {
    if (f7.borderColor.options[i].selected) {
      colorBorder = this.value;
    }
  }
};

createTable.addEventListener("click", () => {
  t[0].style.visibility = "visible";
  bot[0].style.visibility = "visible";
  mid[0].style.visibility = "visible";
  botEdit[0].style.visibility = "visible";
  choose.style.visibility = "hidden";
  table.style.visibility = "hidden";
  f4[0].checked = false;
  choose.style.height = "340px";

  area.value += "<table style='border-collapse: collapse;'>";
  for (let i = 1; i <= tr.value; i++) {
    area.value += "<tr style='border-collapse: collapse;'>";
    for (let j = 1; j <= td.value; j++) {
      area.value += `<td style='height:${heightTd.value}px;width:${widthTd.value}px;border:${widthBorder.value}px ${typeBorder} ${colorBorder};border-collapse: collapse;'>TD</td>`;
    }
    area.value += "</tr>";
  }

  area.value += "</table>";
});

//List
let list = document.querySelector(".list");
f4[1].onclick = function () {
  table.style.visibility = "hidden";
  choose.style.height = "340px";
  list.style.visibility = "visible";
};

let f8 = document.forms.f8;
let countList = document.querySelector("#li");

let listMark;
f8.marks.onchange = function () {
  for (let i = 0; i < f8.marks.options.length; i++) {
    if (f8.marks.options[i].selected) {
      listMark = this.value;
    }
  }
};

createList.addEventListener("click", () => {
  t[0].style.visibility = "visible";
  bot[0].style.visibility = "visible";
  mid[0].style.visibility = "visible";
  botEdit[0].style.visibility = "visible";
  choose.style.visibility = "hidden";
  list.style.visibility = "hidden";
  f4[1].checked = false;
  choose.style.height = "340px";

  area.value += "<ul>";
  for (let i = 1; i <= countList.value; i++) {
    area.value += `<li style='list-style-type:${listMark}'>item${i}</li>`;
  }
  area.value += "</ul>";
});
