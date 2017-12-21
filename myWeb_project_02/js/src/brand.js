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

    var contentBox = $('#contentBox01').offset().top;

    $(window).on('scroll', function(){
        var scroll_top = $(this).scrollTop();
        console.log(scroll_top);
        if(scroll_top >= contentBox){
            topBtn.fadeIn();

        }else{
            topBtn.fadeOut();
        }
    });



       // - jQuery End
})(this.jQuery);