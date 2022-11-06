let hour = 0;
let minute = 0;
let second = 0;
let isPaused = false;

function increaseHour() {
  if (hour === 24) hour = 0;
  else hour++;
  $(".hour").text(hour);
}

function decreaseHour() {
  if (hour === 0) hour = 24;
  else hour--;
  $(".hour").text(hour);
}

function increaseMinute() {
  if (minute === 59) minute = 0;
  else minute++;
  $(".minute").text(minute);
}

function decreaseMinute() {
  if (minute === 0) minute = 59;
  else minute--;
  $(".minute").text(minute);
}

function increaseSecond() {
  if (second === 59) second = 0;
  else second++;
  $(".second").text(second);
}

function decreaseSecond() {
  if (second === 0) second = 59;
  else second--;
  $(".second").text(second);
}

function startCountdown() {
  isPaused = false;

  $(".increase-btn").attr("disabled", "disabled").addClass("disable-btn");
  $(".decrease-btn").attr("disabled", "disabled").addClass("disable-btn");
  $("#change-btn").attr("onclick", "pauseCountdown()").html("Pause");
  $("#stop-btn").removeAttr("disabled").removeClass("disable-btn");
  $("#theme-btn").attr("disabled", "disabled").addClass("disable-btn");

  let countdown = setInterval(function () {
    if (!isPaused) {
      if (second < 1) {
        if (minute <= 0) {
          if (hour <= 0) {
            clearInterval(countdown);
            stopCountdown();
            return;
          } else {
            hour--;
          }
          minute = 59;
        } else {
          minute--;
        }
        second = 59;
      } else {
        second--;
      }

      if (second < 10) {
        $("#tick")[0].play();
      }

      if (minute === 2 && second === 0) {
        $("#beep")[0].play();
        $(".time-container").css({ "background-color": "#FF0000" });
      }

      $(".second").text(second);
      $(".minute").text(minute);
      $(".hour").text(hour);
    }
  }, 1000);
}

function pauseCountdown() {
  isPaused = true;
  $("#change-btn").attr("onclick", "resumeCountdown()").html("Resume");
}

function resumeCountdown() {
  isPaused = false;
  $("#change-btn").attr("onclick", "pauseCountdown()").html("Pause");
}

function stopCountdown() {
  hour = 0;
  minute = 0;
  second = 0;
  let loopBeep = 4;
  // $("#beep")[0].play();

  let beep = setInterval(function () {
    if (loopBeep !== 0) {
      $("#end")[0].play();
    } else {
      clearInterval(beep);
    }
    loopBeep--;
  }, 1000);

  $(".second").text(second);
  $(".minute").text(minute);
  $(".hour").text(hour);
  $(".time-container").css({ backgroundColor: "var(--color-1)" });

  $(".increase-btn").removeAttr("disabled").removeClass("disable-btn");
  $(".decrease-btn").removeAttr("disabled").removeClass("disable-btn");
  $("#change-btn").attr("onclick", "startCountdown()").html("Start");
  $("#stop-btn").attr("disabled", "disabled").addClass("disable-btn");
  $("#theme-btn").removeAttr("disabled").removeClass("disable-btn");
}

function changeTheme() {
  let attr = $("body").attr("data-theme");

  if (typeof attr !== "undefined" && attr !== false) {
    $("body").removeAttr("data-theme");
    $(".theme-btn").html(`<i class="fa-regular fa-sun"></i>`);
  } else {
    $("body").attr("data-theme", "dark");
    $(".theme-btn").html(`<i class="fa-regular fa-moon"></i>`);
  }
}
