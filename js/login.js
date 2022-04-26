$(document).ready(function () {
  $(".right").show(2900);
  $(".info").show(2900);

  $("#signUp").click(function () {
    $(".signUpForm").css("display", "flex");
    $(".overlay").css("display", "block");
  });
  $("#close").click(function () {
    $(".signUpForm").fadeOut(250);
    $(".overlay").fadeOut(250);
  });
  var a = window.innerWidth;
  if (a <= 767) {
    $(".info").css("display", "none");
  }
});
