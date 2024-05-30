$(document).ready(function () {
  $(".modeBtn").click(function () {
    $(".mode").toggle();
    
  });
  let theme = localStorage.getItem("theme") || "light";
  if (theme == "light") {
    $(".darkModeIcon").css("display", "none");
    $(".lightModeIcon").css("display", "block");
    $(".colorBlack").removeClass("colorWhite");
    $(".tt").removeClass("backgroundWhite");
    $(".tt").addClass("backgroundBlack");
  } else if (theme == "dark") {
    $(".darkModeIcon").css("display", "none");
    $(".lightModeIcon").css("display", "block");
    $(".colorBlack").removeClass("colorWhite");
    $(".tt").removeClass("backgroundWhite");
    $(".tt").addClass("backgroundBlack");
  }
});


$(document).ready(function () {
  $(".lightMode").click(function (event) {
    event.preventDefault();
    localStorage.setItem("theme", "light");
    
  });
  $(".darkMode").click(function (event) {
    event.preventDefault();
    localStorage.setItem("theme", "dark");
  
  });
  $(".systemMode").click(function (event) {
    event.preventDefault();

    
  });
});

