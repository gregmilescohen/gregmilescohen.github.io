$(document).ready(function(){
    $("#logo").click(function(){
        $("#about-section").slideDown("ease");
        $("#main-nav").slideDown("ease");
        $(function() {

           var docHeight = $(document).height();

           $("main").append("<div id='overlay'></div>");

           $("#overlay")
              .height(docHeight)
              .css({
                 'opacity' : 0.7,
                 'position': 'fixed',
                 'top': 0,
                 'left': 0,
                 'background-color': 'black',
                 'width': '100%',
                 'z-index': 5000,
                 'display': 'block'
              });

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