$(document).ready(function () {
  $(".modeBtn").click(function () {
    $(".mode").toggle();
  });
});

$(document).ready(function () {
  $(".lightMode").click(function () {
    location.reload();
  });
  $(".darkMode").click(function () {
    location.reload();
  });
  $(".systemMode").click(function () {
    location.reload();
  });
});
