/*--------CHANGING BG COLOR IN NAVBAR--------*/

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("nav").addClass("bgcolor");
      $("nav").addClass("new-wrapper");

      $(".nav-link").addClass("new-color");
      $(".navbar-brand").addClass("new-brand");
      $(".navbar-toggler").addClass("new-toggler");
    } else {
      $("nav").removeClass("bgcolor");
      $("nav").removeClass("new-wrapper");
      $(".nav-link").removeClass("new-color");
      $(".navbar-brand").removeClass("new-brand");
      $(".navbar-toggler").removeClass("new-toggler");
    }
  });
});
