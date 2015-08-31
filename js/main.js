$(document).ready(function(){
    $("#about").click(function(){
        // $("#contact-section").slideUp("ease");
        $("main, #portfolio-section, footer").animate({opacity: "0.4"});
        $("#about-section").slideDown("ease");
    });

    // $("#contact").click(function(){
    //     $("#about-section").slideUp("ease");
    //     $("main, #portfolio-section, footer").animate({opacity: "0.4"});
    //     $("#contact-section").slideDown("ease");
    // });

    $("#about-close").click(function(){
        $("#about-section").slideUp("ease");
        $("main, #portfolio-section, footer").animate({opacity: "1"});
        $("main, #portfolio-section, footer").click(function(){
            });
    });

    // $("#contact-close").click(function(){
    //     $("#contact-section").slideUp("ease");
    //     $("main, #portfolio-section, footer").animate({opacity: "1"});
    // });

    $("#portfolio").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#portfolio-section").offset().top + offset
    }, 500);
    });


});