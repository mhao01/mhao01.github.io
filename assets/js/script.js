$(document).ready(function() {
var aboutPos = $("#about-section").offset().top - 0;
var projectPos = $("#projects-section").offset().top - 0;
var contactPos = $("#contact-section").offset().top - 0;

$(window).load(function() {
  // jQuery Function Number #1
  $(".navbar-container").hide();
})


//navbar appear past first section
  $(window).scroll(function() {

    // jQuery Function Number #2
      if ($(window).scrollTop() > aboutPos) {

        // jQuery Function Number #3
        $(".navbar-container").slideDown(400);
      } else {

        // jQuery Function Number #4
        $(".navbar-container").slideUp(400);
      }


      if ($(window).scrollTop() > projectPos) {

        if ($(window).scrollTop() < contactPos) {

          //jQuery Function Number #5
           $(".navbar-container").addClass("navbar-dark", {duration:500});
           //jQuery Function Number #6
           $(".navbar-container").removeClass("navbar-light");

        } else{
          $(".navbar-container").addClass("navbar-light");
           $(".navbar-container").removeClass("navbar-dark");

        }
    }
})


});