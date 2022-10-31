

  let hour = 0;
  let minute = 0;
  let second = 0;

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
    $(".increase-btn").attr("disabled", "disabled");
    $(".decrease-btn").attr("disabled", "disabled");
    $("#start-btn").attr("disabled", "disabled");
    $("#stop-btn").removeAttr("disabled");

    let countdown = setInterval(function () {
      if (second <= 1) {
        if (minute === 0) {
          if (hour === 0) {
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

      $("#tick")[0].play();
      $(".second").text(second);
      $(".minute").text(minute);
      $(".hour").text(hour);
    }, 1000);
  }

  function stopCountdown() {
    hour = 0;
    minute = 0;
    second = 0;
    let loopBeep = 5;
    $("#beep")[0].play();

    let beep = setInterval(function () {
      if (loopBeep !== 0) {
        $("#beep")[0].play();
      } else {
        clearInterval(beep);
      }
      console.log(loopBeep);
      loopBeep--;
    }, 1000);

    $(".second").text(second);
    $(".minute").text(minute);
    $(".hour").text(hour);

    $(".increase-btn").removeAttr("disabled");
    $(".decrease-btn").removeAttr("disabled");
    $("#start-btn").removeAttr("disabled");
    $("#stop-btn").attr("disabled", "disabled");
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


