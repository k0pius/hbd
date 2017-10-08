$(document).ready( function() {
  $('.yes').mousedown(function(){
    $('.question').fadeOut(2000, function() {
      $('.options').fadeOut(0);
      $('.omg').addClass('on');
      $('.heart').removeClass('off');
      $('.g').delay(6000).removeClass('off').addClass('ganim');
      $('.omgtext').delay(4000).fadeOut(2000, function() {
        var hbd = document.getElementById('hbd');
        hbd.play();
        $('.b').removeClass('off').addClass('banim');
        $('.happytext').delay(20000).fadeIn(1000);
      });

    });
  });
});
