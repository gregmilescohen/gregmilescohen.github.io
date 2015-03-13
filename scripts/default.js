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



  $('#linkedin').on({
    'mouseover' : function() {
      $(this).attr('src', "https://raw.githubusercontent.com/gregmilescohen/gregmilescohen.github.io/master/img/linkedin2-color.png");
    },
    'mouseout' : function() {
      $(this).attr('src',"https://raw.githubusercontent.com/gregmilescohen/gregmilescohen.github.io/master/img/linkedin2-color.png");
    }
  });

  $('#twitter').on({
    'mouseover' : function() {
      $(this).attr('src', "https://raw.githubusercontent.com/gregmilescohen/gregmilescohen.github.io/master/img/twitter2-color.png");
    },
    'mouseout' : function() {
      $(this).attr('src',"https://raw.githubusercontent.com/gregmilescohen/gregmilescohen.github.io/master/img/twitter2.png");
    }
  });

  $('#facebook').on({
    'mouseover' : function() {
      $(this).attr('src', "https://raw.githubusercontent.com/gregmilescohen/gregmilescohen.github.io/master/img/facebook2-color.png");
    },
    'mouseout' : function() {
      $(this).attr('src',"https://raw.githubusercontent.com/gregmilescohen/gregmilescohen.github.io/master/img/facebook2.png");
    }
  });

  $('#instagram').on({
    'mouseover' : function() {
      $(this).attr('src', "https://raw.githubusercontent.com/gregmilescohen/gregmilescohen.github.io/master/img/instagram2-color.png");
    },
    'mouseout' : function() {
      $(this).attr('src',"https://raw.githubusercontent.com/gregmilescohen/gregmilescohen.github.io/master/img/instagram2.png");
    }
  });

  $('#github').on({
    'mouseover' : function() {
      $(this).attr('src', "https://raw.githubusercontent.com/gregmilescohen/gregmilescohen.github.io/master/img/github2-color.png");
    },
    'mouseout' : function() {
      $(this).attr('src',"https://raw.githubusercontent.com/gregmilescohen/gregmilescohen.github.io/master/img/github2.png");
    }
  });

});