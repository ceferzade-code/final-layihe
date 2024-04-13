$(document).ready(function () {
  $(".modeBtn").click(function () {
    $(".mode").toggle();
  });
});

$(document).ready(function () {
  $(".darkMode").click(function () {
    $("body").css("background-color", "black");
    $(".newWork a").css("background-color", "white");
    $(".newWork a").css("color", "black");
    $(".modeBtn button").css("background-color", "black");
    $(".modeBtn button").css("color", "white");
    $(".headrLeft a").css("color", "white");
    $(".mode").css("background-color", "black");
    $(".mode ").css("color", "white");
    $(".lightModeIcon").css("display", "none");
    $(".darkModeIcon").css("display", "block");
  });
});
