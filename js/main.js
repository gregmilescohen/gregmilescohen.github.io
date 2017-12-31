$(document).ready(function(){
 
 //FLASH LOGO-HOVER 2X ON PAGELOAD 
  setTimeout(function(){
      $('#logo').css({
        'background': 'url(img/GMC-logo-hover.svg) no-repeat',
        'transition': 'background .2s',
        '-webkit-transition': 'background .2s',
      });
  },1000);
  setTimeout(function(){
      $('#logo').css({
        'background': 'url(img/GMC-logo-new.svg) no-repeat',
        'transition': 'background .2s',
        '-webkit-transition': 'background .2s',
      });
  },2000);
  setTimeout(function(){
      $('#logo').css({
        'background': 'url(img/GMC-logo-hover.svg) no-repeat',
        'transition': 'background .2s',
        '-webkit-transition': 'background .2s',
      });
  },3000);
  setTimeout(function(){
      $('#logo').css({
        'background': 'url(img/GMC-logo-new.svg) no-repeat',
        'transition': 'background .2s',
        '-webkit-transition': 'background .2s',
      });
  },4000);
  //reenable hover state
  setTimeout(function(){
    $('#logo').css('background', '');
  },4100);
  

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