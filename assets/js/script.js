$(document).ready(function() {
var aboutPos = $("#about-section").offset().top - 0;
var projectPos = $("#projects-section").offset().top - 0;
var contactPos = $("#contact-section").offset().top - 0;

$(window).load(function() {
  // jQuery Function Number #1 (scrollTop)
  if ($(window).scrollTop() < aboutPos) {
  $(".navbar-container").hide();
  }
})


//navbar appear past first section
  $(window).scroll(function() {

    //console.log(aboutPos + " " + projectPos + " " + contactPos+" " + $(window).scrollTop())

    //Show navbar when not in first section
      if ($(window).scrollTop() > aboutPos -10) {
        // jQuery Function Number #2 (slideDown)
        $(".navbar-container").slideDown(400);
      } else {
        // jQuery Function Number #3 (slideUp)
        $(".navbar-container").slideUp(400);
      }

    //Change navbar color when in contact section
      if ($(window).scrollTop() > projectPos) {
        if ($(window).scrollTop() < contactPos) {
          //jQuery Function Number #4 (addClass)
           $(".navbar-container").addClass("navbar-dark", {duration:500});
           //jQuery Function Number #5 (removeClass)
           $(".navbar-container").removeClass("navbar-light");

           $("#contact-button").css('font-weight', 'auto');
        } else{
          $(".navbar-container").addClass("navbar-light");
           $(".navbar-container").removeClass("navbar-dark");
           $("#contact-button").css('font-weight', 'bold');
        }
      }

      if ($(window).scrollTop() > aboutPos && $(window).scrollTop() < projectPos){
          $("#about-button").css('font-weight', 'bold');
      } else{
          $("#about-button").css('font-weight', 'auto');
      }

      if ($(window).scrollTop() > projectPos && $(window).scrollTop() < contactPos){
          console.log("about");
          $("#projects-button").css('font-weight', 'bold');
      } else{
          $("#projects-button").css('font-weight', 'auto');
      }

  })

  $(".button").click(function(){
    //jQuery Function Number #6 (hasClass)
    if ($(this).hasClass("nav_home-link")){
      $('html, body').animate({scrollTop:0}, 700);
    } else if ($(this).hasClass("aboutb")){
      $('html, body').animate({scrollTop:aboutPos}, 700);
    } else if ($(this).hasClass("projectsb")){
      $('html, body').animate({scrollTop:projectPos}, 700);
    } else if ($(this).hasClass("contactb")){
      $('html, body').animate({scrollTop:contactPos}, 700);
    }


  })





});