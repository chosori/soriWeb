(function($){
// jQuery Start
  var lnbBtn = $('.lnb01');
  var gnbUl = lnbBtn.children('ul');

  lnbBtn.on('click', function(evt){
    evt.preventDefault();
    // gnbUl.toggle();
    gnbUl.slideToggle();
    // gnbUl.fadeToggle();
  });



    var topBtn =$('.top_btn');

    var bannerBox = $('.bannerImg').offset().top;

    $(window).on('scroll', function(){
        var scroll_top = $(this).scrollTop();
        console.log(scroll_top);
        if(scroll_top >= bannerBox){
            topBtn.fadeIn();

        }else{
            topBtn.fadeOut();
        }
    });

   // - jQuery End
})(this.jQuery);