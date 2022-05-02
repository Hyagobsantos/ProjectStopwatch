$(".button__definir").on('click', () => {
    $('.div__modal').toggleClass('hide__modal');
    $('.div__main').toggleClass('hide__modal');
})

$(".button__cancel").on('click', () => {
    $('.div__modal').toggleClass('hide__modal');
    $('.div__main').removeClass('hide__modal');
});

$(document).ready((e) => {
  $('.button__confirm').click(function (e) { 
    e.preventDefault();
  
    var data = $('#data_final').val().replaceAll('-', '/');
    var hora = $('#hora_final').val() + ":00";
  
    var setdatas = `${data} ${hora}`;
    var local = localStorage.setItem('objteste', JSON.stringify(result));

    var result = local ?? setdatas;

    console.log(result)
    

  
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = result;
      console.log(finalDate)
      $this.countdown(finalDate, function(event) {
        $this.text(event.strftime('%D dias, %H horas, %M minutos e %S segundos'));
      });
    });
  
  });
  
})



