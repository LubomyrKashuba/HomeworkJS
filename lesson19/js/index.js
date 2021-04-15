let regExpName = /^[a-zA-Z]{1,20}$/;
let regExpEmail = /^[^\s@][a-z0-9\.\-]+@[^\s@][a-z]+\.[^\s@][a-z]+$/i;
let regExpPassword = /^[A-Za-z0-9]{8,15}$/;
$("#number").mask("+38(099)-999-99-99");
$("#button").click(() => {
  if (regExpName.test(f.firstName.value)) {
    f.firstName.style.backgroundImage =
      "url(img/Tick_Mark_icon-icons.com_69146.png)";
    f.firstName.style.border = "2px solid #41ad49";
    $(".firstName").css("visibility", "hidden");
  } else {
    f.firstName.style.backgroundImage =
      "url(img/Close_Icon_icon-icons.com_69144.png)";
    f.firstName.style.border = "2px solid #e44061";
    $(".firstName").css("visibility", "visible");
  }
  if (regExpName.test(f.lastName.value)) {
    f.lastName.style.backgroundImage =
      "url(img/Tick_Mark_icon-icons.com_69146.png)";
    f.lastName.style.border = "2px solid #41ad49";
    $(".lastName").css("visibility", "hidden");
  } else {
    f.lastName.style.backgroundImage =
      "url(img/Close_Icon_icon-icons.com_69144.png)";
    f.lastName.style.border = "2px solid #e44061";
    $(".lastName").css("visibility", "visible");
  }
  if (regExpEmail.test(f.email.value)) {
    f.email.style.backgroundImage =
      "url(img/Tick_Mark_icon-icons.com_69146.png)";
    f.email.style.border = "2px solid #41ad49";
    $(".email").css("visibility", "hidden");
  } else {
    f.email.style.backgroundImage =
      "url(img/Close_Icon_icon-icons.com_69144.png)";
    f.email.style.border = "2px solid #e44061";
    $(".email").css("visibility", "visible");
  }
  if (regExpPassword.test(f.password.value)) {
    f.password.style.backgroundImage =
      "url(img/Tick_Mark_icon-icons.com_69146.png)";
    f.password.style.border = "2px solid #41ad49";
    $(".password").css("visibility", "hidden");
  } else {
    f.password.style.backgroundImage =
      "url(img/Close_Icon_icon-icons.com_69144.png)";
    f.password.style.border = "2px solid #e44061";
    $(".password").css("visibility", "visible");
  }
  if (f.number.value === "") {
    f.number.style.backgroundImage =
      "url(img/Close_Icon_icon-icons.com_69144.png)";
    f.number.style.border = "2px solid #e44061";
    $(".number").css("visibility", "visible");
  } else {
    f.number.style.backgroundImage =
      "url(img/Tick_Mark_icon-icons.com_69146.png)";
    f.number.style.border = "2px solid #41ad49";
    $(".number").css("visibility", "hidden");
  }
});
