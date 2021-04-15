let regExpName = /^[a-zA-Z]{1,20}$/;
let regExpEmail = /^[^\s@][a-z0-9\.\-]+@[^\s@][a-z]+\.[^\s@][a-z]+$/i;
let regExpPassword = /^[A-Za-z0-9]{8,15}$/;
let check = false;

let count = 0;
let render = (arr) => {
  $(".users").html("");
  count = 0;
  arr.forEach((item) => {
    $(".users").append(`<tr class="row${count}"></tr>`);
    for (let key in item) {
      $(`.row${count}`).append(`<td>${item[key]}</td>`);
    }
    $(`.row${count}`).append(
      `<td><button class='edit' onclick='editUser(${count})'>Edit</button></td>`
    );
    $(`.row${count}`).append(
      `<td><button class='delete' onclick='deleteUser(${count})'>Delete</button></td>`
    );
    count += 1;
  });
};
let arr = [];
const addUser = () => {
  regExp();
  if (check) {
    let obj = {};
    obj.num = arr.length + 1;
    obj.firstName = $("#login").val();
    obj.password = $("#password").val();
    obj.email = $("#email").val();

    arr.push(obj);

    $("#login").val("");
    $("#password").val("");
    $("#email").val("");

    render(arr);

    $("#login").css("border", "1px solid rgb(185, 185, 185)");
    $("#password").css("border", "1px solid rgb(185, 185, 185)");
    $("#email").css("border", "1px solid rgb(185, 185, 185)");

    check = false;
  }
};

const deleteUser = (index) => {
  num = arr.length;
  let newArr = arr.filter((item, i) => {
    if (i > index) {
      item.num -= 1;
    }
    return i !== index;
  });
  arr = newArr;
  render(arr);
};
let userIndex;
const editUser = (index) => {
  $("#login").val(arr[index].firstName);
  $("#password").val(arr[index].password);
  $("#email").val(arr[index].email);
  userIndex = index;
  $(".add").hide();
  $(".editUser").show();
};

const saveEditUser = () => {
  let newObj = {};
  newObj.num = userIndex + 1;
  newObj.firstName = $("#login").val();
  newObj.password = $("#password").val();
  newObj.email = $("#email").val();

  let newArr = arr.map((item, index) => {
    if (index === userIndex) {
      item = newObj;
    }
    return item;
  });
  arr = newArr;
  $("#login").val("");
  $("#password").val("");
  $("#email").val("");

  $(".add").show();
  $(".editUser").hide();

  render(arr);
};

const regExp = () => {
  if (!regExpName.test($("#login").val())) {
    $("#login").css("border", "1px solid #e44061");
    $(".firstName").show();
  } else {
    $("#login").css("border", "1px solid #41ad49");
    $(".firstName").hide();
  }
  if (!regExpPassword.test($("#password").val())) {
    $("#password").css("border", "1px solid #e44061");
    $(".password").show();
  } else {
    $("#password").css("border", "1px solid #41ad49");
    $(".password").hide();
  }
  if (!regExpEmail.test($("#email").val())) {
    $("#email").css("border", "1px solid #e44061");
    $(".email").show();
  } else {
    $("#email").css("border", "1px solid #41ad49");
    $(".email").hide();
  }
  if (
    regExpName.test($("#login").val()) &&
    regExpPassword.test($("#password").val()) &&
    regExpEmail.test($("#email").val())
  ) {
    check = true;
  }
};
