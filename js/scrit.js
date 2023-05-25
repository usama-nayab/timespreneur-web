wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
$(document).ready(function () {
    
    $(document).scroll(function () { 
        var scroll = $(window).scrollTop();

        if (scroll > 200) {
            $('.navbar').addClass('scrolled');
        }else{
            $('.navbar').removeClass('scrolled');
        }
    });
});