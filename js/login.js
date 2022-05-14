$(document).ready(function () {
  $(".right").show(2900);
  $(".info").show(2900);
  var a = window.innerWidth;
  if (a <= 767) {
    $(".info").css("display", "none");
  }
});
