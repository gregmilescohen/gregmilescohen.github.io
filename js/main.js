$(document).ready(function(){
 
 //detect browser
  var ua = navigator.userAgent.toLowerCase(); 
  if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') > -1) {
      var browserType = "chrome"; // Chrome
    } else {
      var browserType = "safari"; // Safari
    };
  };
 //FLASH LOGO-HOVER 2X ON PAGELOAD except on safari - animation looks bad
  // setTimeout(function(){
  //   if (browserType !== "safari") {
  //     setTimeout(function(){
  //         $('#logo').css({
  //           'background': 'url(img/GMC-logo-hover.svg) no-repeat',
  //           'transition': 'background .2s',
  //           '-webkit-transition': 'background .2s',
  //           '-moz-transition': 'background .2s',
  //         });
  //     },3000);
  //     setTimeout(function(){
  //         $('#logo').css({
  //           'background': 'url(img/GMC-logo-new.svg) no-repeat',
  //           'transition': 'background .2s',
  //           '-webkit-transition': 'background .2s',
  //           '-moz-transition': 'background .2s',
  //         });
  //     },3800);
  //     setTimeout(function(){
  //         $('#logo').css({
  //           'background': 'url(img/GMC-logo-hover.svg) no-repeat',
  //           'transition': 'background .2s',
  //           '-webkit-transition': 'background .2s',
  //           '-moz-transition': 'background .2s',
  //         });
  //     },4400);
  //     setTimeout(function(){
  //         $('#logo').css({
  //           'background': 'url(img/GMC-logo-new.svg) no-repeat',
  //           'transition': 'background .2s',
  //           '-webkit-transition': 'background .2s',
  //           '-moz-transition': 'background .2s',
  //         });
  //     },5200);
  //     //reenable hover state
  //     setTimeout(function(){
  //       $('#logo').css('background', '');
  //     },5201);
  //   };
  // },0);
  //END ABOUT ME ANIMATION

      $("#logo").click(function(){
        $("#about-section").fadeIn("ease");
        // $("#main-nav").slideDown("ease");
        $(function() {

           var docHeight = $(document).height();

           $("#background").prepend("<div id='overlay'></div>");

           $("#overlay")
              .height(docHeight)
              // .css({
              //    'opacity' : 0.95,
              //    'position': 'fixed',
              //    'top': 0,
              //    'left': 0,
              //    'background-color': 'white',
              //    'width': '100%',
              //    'height': '100%',
              //    'z-index': 10,
              //    'display': 'block'
              // });
            $('.lightbox').css('display','block');

        });
    });

    $('button.close').click(function(){
      $('#about-section').fadeOut('ease').css('display','none')
      $('#overlay').fadeOut('ease').css('display','none')

    });

    $("#about-close").click(function(){
        $("#about-section").slideUp("ease");
        $("#overlay").remove();
    });


    $("#portfolio-button").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#portfolio-section").offset().top + offset
    }, 500);
    });


});