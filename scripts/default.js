$(document).ready(function() {

  // to animate nav page links
  $("#home").mouseenter(function() {
    $(this).animate({"margin-right": "-15px"}, "fast");
  });
  $("#home").mouseleave(function() {
    $(this).animate({"margin-right": "0px"}, "fast");
  });
  $("#about").mouseenter(function() {
    $(this).animate({"margin-right": "-15px"}, "fast");
  });
  $("#about").mouseleave(function() {
    $(this).animate({"margin-right": "0px"}, "fast");
  });
  $("#work").mouseenter(function() {
    $(this).animate({"margin-right": "-15px"}, "fast");
  });
  $("#work").mouseleave(function() {
    $(this).animate({"margin-right": "0px"}, "fast");
  });
  $("#contact").mouseenter(function() {
    $(this).animate({"margin-right": "-15px"}, "fast");
  });
  $("#contact").mouseleave(function() {
    $(this).animate({"margin-right": "0px"}, "fast");
  });
  $("#blog").mouseenter(function() {
    $(this).animate({"margin-right": "-15px"}, "fast");
  });
  $("#blog").mouseleave(function() {
    $(this).animate({"margin-right": "0px"}, "fast");
  });





  $('#linkedin').on('mouseover', function(e){
    e.preventDefault();
    $('#linkedin img').attr('src', '../img/linkedin2-color.png');
  });
  $('#linkedin').on('mouseleave', function(e){
    e.preventDefault();
    $('#linkedin img').attr('src', "../img/linkedin2.png");
  });


  $('#twitter').on('mouseover', function(e){
    e.preventDefault();
    $('#twitter img').attr('src', '../img/twitter2-color.png');
  });
  $('#twitter').on('mouseleave', function(e){
    e.preventDefault();
    $('#twitter img').attr('src', "../img/twitter2.png");
  });

  $('#facebook').on('mouseover', function(e){
    e.preventDefault();
    $('#facebook img').attr('src', '../img/facebook2-color.png');
  });
  $('#facebook').on('mouseleave', function(e){
    e.preventDefault();
    $('#facebook img').attr('src', "../img/facebook2.png");
  });

  $('#instagram').on('mouseover', function(e){
    e.preventDefault();
    $('#instagram img').attr('src', '../img/instagram2-color.png');
  });
  $('#instagram').on('mouseleave', function(e){
    e.preventDefault();
    $('#instagram img').attr('src', "../img/instagram2.png");
  });

  $('#github').on('mouseover', function(e){
    e.preventDefault();
    $('#github img').attr('src', '../img/github2-color.png');
  });
  $('#github').on('mouseleave', function(e){
    e.preventDefault();
    $('#github img').attr('src', "../img/github2.png");
  });


});