$(document).ready(function(){
    $("#logo").click(function(){
        $("#about-section").slideDown("ease");
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