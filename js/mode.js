$(document).ready(function () {
  $(".modeBtn").click(function () {
    $(".mode").toggle();
  });
  let theme = localStorage.getItem("theme") || "light";
  if (theme == "light") {
    $(".darkModeIcon").css("display", "none");
    $(".lightModeIcon").css("display", "block");
    $(".colorBlack").removeClass("colorWhite");
    $(".xx").removeClass("darkBorder");
    $(".tt").removeClass("backgroundWhite");
    $(".tt").addClass("backgroundBlack");
  } else if (theme == "dark") {
    $(".darkModeIcon").css("display", "block");
    $(".lightModeIcon").css("display", "none");
    $(".colorBlack").addClass(" colorWhite");
    $(".xx").addClass("darkBorder");
    $(".tt").removeClass("backgroundBlack");
    $(".tt").addClass("backgroundWhite");
  }
  console.log(theme);
});

$(document).ready(function () {
  $(".lightMode").click(function (event) {
    event.preventDefault();
    localStorage.setItem("theme", "light");
    $(".darkModeIcon").css("display", "none");
    $(".lightModeIcon").css("display", "block");
    $(".colorBlack").removeClass("colorWhite");
    $(".xx").removeClass("darkBorder");
    $(".tt").removeClass("backgroundWhite");
    $(".tt").addClass("backgroundBlack");
    // console.log(theme);
  });
  $(".darkMode").click(function (event) {
    event.preventDefault();
    localStorage.setItem("theme", "dark");
    // console.log(theme);
    $(".darkModeIcon").css("display", "block");
    $(".lightModeIcon").css("display", "none");
    $(".colorBlack").addClass("colorWhite");
    $(".xx").addClass("darkBorder");
    $(".tt").removeClass("backgroundBlackf");
    $(".tt").addClass("backgroundWhite");
  });
  $(".systemMode").click(function (event) {
    event.preventDefault();
  });
});
