//date
setInterval(() => {
  let newDate = new Date();
  let day = newDate.getDate();
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  if (year < 10) year = "0" + year;
  $(".data").html(day + "." + month + "." + year);
}, 1000);

//clock
setInterval(() => {
  let newDate = new Date();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  $(".time").html(hours + ":" + minutes + ":" + seconds);
}, 1000);

let start;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
$(".start").click(() => {
  start = setInterval(() => {
    milliseconds += 5;
    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds += 1;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    }
    if (minutes === 60) {
      minutes = 0;
      hours += 1;
    }
    if (hours === 60) {
      hours = 0;
    }
    if (milliseconds < 10) {
      $(".milliseconds").html("0" + milliseconds);
    } else if (milliseconds < 100) {
      $(".milliseconds").html("0" + milliseconds);
    } else {
      $(".milliseconds").html(milliseconds);
    }
    if (seconds < 10) {
      $(".seconds").html("0" + seconds + ":");
    } else {
      $(".seconds").html(seconds + ":");
    }
    if (minutes < 10) {
      $(".minutes").html("0" + minutes + ":");
    } else {
      $(".minutes").html(minutes + ":");
    }
    if (hours < 10) {
      $(".hours").html("0" + hours + ":");
    } else {
      $(".hours").html(hours + ":");
    }
  }, 5);
});

$(".stop").click(() => {
  clearInterval(start);
});

$(".reset").click(() => {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  clearInterval(start);
  $(".milliseconds").html("000");
  $(".seconds").html("00:");
  $(".minutes").html("00:");
  $(".hours").html("00:");
});

$(".loop").click(() => {
  $(".board_show").append(`<p>
    ${$(".hours").html()}
    ${$(".minutes").html()}
    ${$(".seconds").html()}
    ${$(".milliseconds").html()}
    </p>
  `);
});

let time = 25;

$(".plus").click(() => {
  time += 1;
  if (time < 10) {
    $(".set-time").html("0" + time);
  } else {
    $(".set-time").html(time);
  }
});
$(".minus").click(() => {
  time -= 1;
  if (time < 10) {
    $(".set-time").html("0" + time);
  } else {
    $(".set-time").html(time);
  }
});
let botStart;
let botSeconds = 0;
$(".bot-start").click(() => {
  botStart = setInterval(() => {
    if (botSeconds === 0) {
      time -= 1;
      botSeconds = 60;
    }
    botSeconds -= 1;
    if (botSeconds < 10) {
      $(".bot-display-seconds").html("0" + botSeconds);
    } else {
      $(".bot-display-seconds").html(botSeconds);
    }
    if (time < 10) {
      $(".bot-display-minutes").html("0" + time + ":");
    } else {
      $(".bot-display-minutes").html(time + ":");
    }
  }, 1000);
});

$(".bot-stop").click(() => clearInterval(botStart));

$(".bot-reset").click(() => {
  botSeconds = 0;
  clearInterval(botStart);
  $(".bot-display-minutes").html("00:");
  $(".bot-display-seconds").html("00");
});
