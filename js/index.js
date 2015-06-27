  $('document').ready(function () {
    var trigger = $('.awesome-burger'),
        isClosed = true;

    trigger.click(function () {
      burgerTime();
    });

    function burgerTime() {
      if (isClosed == true) {
        trigger.addClass('awesome-burger-closed');
        isClosed = false;
      } else {
        trigger.removeClass('awesome-burger-closed');
        isClosed = true;
      }
    }

  });
