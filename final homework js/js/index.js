//function change class for buttons font style decoration
const fontStyleChange = (style) => {
  $("main").toggleClass(style);
};

//function for buttons that change text-align
const textAlign = (direction) => {
  $("main").css("text-align", direction);
};

//font-family menu
let fontFamily = $("#fontFamily").children().children(); //array with font-family links

const changeFontFamily = () => {
  fontFamily.each((index, item) => {
    $(item).css("font-family", $(item).html());
    $(item).click(() => {
      $("main").css("font-family", $(item).html());
    });
  });
};
changeFontFamily();

//font-Size menu
let fontSize = $("#fontSize").children().children(); //array with font-size links

const changeFontSize = () => {
  fontSize.each((index, item) => {
    $(item).css("font-size", $(item).html());
    $(item).click(() => {
      $("main").css("font-size", $(item).html());
    });
  });
};
changeFontSize();

//Change-color menu
let colors = $("#modal-body").children(); //array with color blocks

const changeColor = () => {
  colors.each((index, item) => {
    $(item).css("background-color", $(item).prop("class"));
    $(item).click(() => {
      $("main").css("color", $(item).prop("class"));
    });
  });
};
changeColor();
//Change-background menu
let backgroundColors = $("#nav-home").children(); //array with backgroundColor blocks

const changeBackgroundColor = () => {
  backgroundColors.each((index, item) => {
    $(item).css("background-color", $(item).prop("class"));
    $(item).click(() => {
      $("main").css("background-image", "none");
      $("main").css("background-color", $(item).prop("class"));
    });
  });
};
changeBackgroundColor();

//Change-background_image menu
let backgroundImages = $("#nav-profile").children(); //array with backgroundImages blocks
const changeBackgroundImage = () => {
  backgroundImages.each((index, item) => {
    $(item).click(() => {
      $("main").css("background-image", $(item).css("background-image"));
    });
  });
};
changeBackgroundImage();

//Up load background image
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("main").css("background-image", `url(${e.target.result})`);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

//Sign-in menu (validate and unlock edit button)

$("#Sign-in").click(() => {
  if ($("#login").val() === "" || $("#password").val() === "") {
    $("#login").addClass("is-invalid");
    $("#password").addClass("is-invalid");
  } else {
    $("#login").removeClass("is-invalid");
    $("#password").removeClass("is-invalid");
  }
  if ($("#login").val() === "admin" && $("#password").val() === "11111") {
    $("#aaa").removeClass("needs-validation");
    $("#aaa").addClass("was-validated");
    $("#Modal1").modal("hide");
    $("#admin").removeClass("non-active");
    $("#admin").addClass("active");
    $("#admin").addClass("btn-outline-secondary");
    $(".logged-out").hide();
    setTimeout(() => {
      $(".logged-in").show();
    }, 1000);

    // Open edit-menu button
    $("#admin").click(() => {
      $("#user").hide();
      $(".admin").show();
      $("main").append(`<textarea></textarea`);
      $("textarea").val($(".wrapper").html());
      $(".wrapper").hide();
    });
  } else if ($("#login").val() !== "" || $("#password").val() !== "") {
    $("#login").addClass("is-invalid");
    $("#password").addClass("is-invalid");
    $("#empty").html("Please check your login or password");
  }
});

//sign-out button
$("#sign-out").click(() => {
  $(".logged-in").hide();
  setTimeout(() => {
    $(".logged-out").show();
  }, 1000);
  $("#Modal1").modal("hide");
  $("#admin").addClass("non-active");
  $("#admin").removeClass("active");
  $("#admin").removeClass("btn-outline-secondary");
  $("#admin").off();
  $("#login").val("");
  $("#password").val("");
});

//Save button
$("#save").click(() => {
  $(".wrapper").html($("textarea").val());
  $("textarea").remove();
  $("#user").show();
  $(".admin").hide();
  $(".wrapper").show();
});

//Create table menu
$("#createTableButton").click(() => {
  let check = false;
  //inputs validation
  $(".forValid").each((index, item) => {
    if ($(item).val() === "") {
      $(item).addClass("is-invalid");
      $(".table").show();
    } else {
      $(item).removeClass("is-invalid");
    }
  });
  // select validation
  let typeBorder;
  let colorBorder;
  check = false;
  $("#tableStyleBorder")
    .children(":not(:first-child)")
    .each((index, item) => {
      if (!$(item).is(":selected")) {
        $("#tableStyleBorder").addClass("is-invalid");
      } else {
        typeBorder = $(item).text();
        check = true;
      }
      if (check) {
        $("#tableStyleBorder").removeClass("is-invalid");
      }
    });
  check = false;
  $("#tableColorBorder")
    .children(":not(:first-child)")
    .each((index, item) => {
      if (!$(item).is(":selected")) {
        $("#tableColorBorder").addClass("is-invalid");
      } else {
        colorBorder = $(item).text();
        check = true;
      }
      if (check) {
        $("#tableColorBorder").removeClass("is-invalid");
      }
    });

  $(".forValid").each((index, item) => {
    if ($(item).hasClass("is-invalid")) {
      check = false;
    }
  });
  if (check) {
    $(".table").hide();
    $("textarea").val(
      $("textarea").val() + '<table style="border-collapse: collapse;"><tbody>'
    );
    for (let i = 0; i < $("#tableTr").val(); i++) {
      $("textarea").val(
        $("textarea").val() + '<tr style="border-collapse: collapse;">'
      );
      for (let j = 0; j < $("#tableTdCount").val(); j++) {
        $("textarea").val(
          $("textarea").val() +
            `<td style="height:${$("#tableTdHeight").val()}px;width:${$(
              "#tableTdWidth"
            ).val()}px;border:${$(
              "#tableBorderWidth"
            ).val()}px ${typeBorder} ${colorBorder};border-collapse: collapse;">TD</td>`
        );
      }
      $("textarea").val($("textarea").val() + "</tr>");
    }
    $("textarea").val($("textarea").val() + "</tbody></table>");
  }
});

$("#resetTableButton").click(() => {
  $(".forValid").val("");
  $("#tableColorBorder").val("Choose color");
  $("#tableStyleBorder").val("Choose style");
});

//Create Order List
//Create order list button
$("#createOL").click(() => {
  let check = false;
  let listType;
  $(".forOLValidate").each((index, item) => {
    if ($(item).val() === "") {
      $(item).addClass("is-invalid");
      $(".OL").show();
    } else {
      $(item).removeClass("is-invalid");
    }
  });
  $("#typeOL")
    .children(":not(:first-child)")
    .each((index, item) => {
      if (!$(item).is(":selected")) {
        $("#typeOL").addClass("is-invalid");
        $(".OL").show();
      } else {
        listType = $(item).val();
        check = true;
      }
      if (check) {
        $("#typeOL").removeClass("is-invalid");
      }
    });
  if (check) {
    $(".OL").hide();
    $("textarea").val($("textarea").val() + "<ol>");
    for (let i = 0; i < $("#countOL").val(); i++) {
      $("textarea").val(
        $("textarea").val() +
          `<li style='list-style-type:${listType};'>Item</li>`
      );
    }
    $("textarea").val($("textarea").val() + "</ol>");
  }
});

//Reset order list button
$("#resetOL").click(() => {
  $(".forOLValidate").val("");
});

//Create unordered list

//create un ordered lest button
$("#createUL").click(() => {
  let check = false;
  let listType;
  $(".forULValidate").each((index, item) => {
    if ($(item).val() === "") {
      $(item).addClass("is-invalid");
      $(".UL").show();
    } else {
      $(item).removeClass("is-invalid");
    }
  });
  $("#typeUL")
    .children(":not(:first-child)")
    .each((index, item) => {
      if (!$(item).is(":selected")) {
        $("#typeUL").addClass("is-invalid");
        $(".UL").show();
      } else {
        listType = $(item).val();
        check = true;
      }
      if (check) {
        $("#typeUL").removeClass("is-invalid");
      }
    });
  if (check) {
    $(".UL").hide();
    $("textarea").val($("textarea").val() + "<ul>");
    for (let i = 0; i < $("#countUL").val(); i++) {
      $("textarea").val(
        $("textarea").val() +
          `<li style='list-style-type:${listType};'>Item</li>`
      );
    }
    $("textarea").val($("textarea").val() + "</ul>");
  }
});

//Reset order list button
$("#resetUL").click(() => {
  $(".forULValidate").val("");
});
