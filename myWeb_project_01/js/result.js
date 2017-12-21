// result.js

(function($){
  var topBtn =$('.top_btn');

    var headBox = $('#headBox').offset().top;

    $(window).on('scroll', function(){
        var scroll_top = $(this).scrollTop();
        console.log(scroll_top);
        if(scroll_top >= headBox){
            topBtn.fadeIn();

        }else{
            topBtn.fadeOut();
        }
    });


})(this.jQuery);