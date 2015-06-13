$(document).ready(function(){
    $("#about").click(function(){
        $("#contact-section").slideUp("slow");
        // $("main, #portfolio-section, footer").animate({opacity: "0.4"});
        $("#about-section").slideDown("slow");
    });

    $("#contact").click(function(){
        $("#about-section").slideUp("slow");
        // $("main, #portfolio-section, footer").animate({opacity: "0.4"});
        $("#contact-section").slideDown("slow");
    });

    $("#about-close").click(function(){
        $("#about-section").slideUp("slow");
        // $("main, #portfolio-section, footer").animate({opacity: "1"});
    });

    $("#contact-close").click(function(){
        $("#contact-section").slideUp("slow");
        // $("main, #portfolio-section, footer").animate({opacity: "1"});
    });

    $("#portfolio").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#portfolio-section").offset().top + offset
    }, 500);
    });


});