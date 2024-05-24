$(document).ready(function () {
  $(".modeBtn").click(function () {
    $(".mode").toggle();
  });
});
// let light = document.querySelectorAll(".colorBlack");
// let dark = document.querySelectorAll(".colorWhite");
$(document).ready(function () {
  $(".lightMode").click(function (event) {
    event.preventDefault();
    $(".darkModeIcon").css("display", "none");
    $(".lightModeIcon").css("display", "block");
    $(".colorBlack").removeClass("colorWhite");
    $(".tt").removeClass("backgroundWhite");
    $(".tt").addClass("backgroundBlack");
    // location.reload();
  });
  $(".darkMode").click(function (event) {
    event.preventDefault();
    $(".lightModeIcon").css("display", "none");
    $(".darkModeIcon").css("display", "block");
    $(".colorBlack").addClass("colorWhite");
    $(".tt").addClass("backgroundWhite");
    $(".tt").removeClass("backgroundBlack");

    // location.reload();
  });
  $(".systemMode").click(function (event) {
    event.preventDefault();

    // location.reload();
  });
});
