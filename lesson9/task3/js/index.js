let getMath = {
  PI: 3.141592653589793,
  pow: function (number, degree) {
    if (number === undefined && degree === undefined) {
      return alert("please have to write numbers");
    } else if (isNaN(number) && isNaN(degree)) {
      return alert("have to write numbers");
    }
    let a = number ** degree;
    return a;
  },
  abs: function (number) {
    if (number === undefined) {
      return alert("please have to write number");
    } else if (isNaN(number)) {
      return alert("have to write number");
    }
    number = -number;
    return number;
  },
  max: function () {
    if (arguments[0] === undefined) {
      return alert("please have to write number");
    } else if (isNaN(arguments[0])) {
      return alert("have to write numbers");
    }
    let a = arguments[0];
    for (let i = 1; i <= arguments.length; i++) {
      if (a < arguments[i]) {
        a = arguments[i];
      }
    }
    return a;
  },
  min: function () {
    if (arguments[0] === undefined) {
      return alert("please have to write number");
    } else if (isNaN(arguments[0])) {
      return alert("have to write numbers");
    }
    let a = arguments[0];
    for (let i = 1; i <= arguments.length; i++) {
      if (a > arguments[i]) {
        a = arguments[i];
      }
    }
    return a;
  },
};

console.log(getMath.min('b',2, 5, -11, 45));
