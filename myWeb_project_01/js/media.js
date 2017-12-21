// midea.js

(function($){
  var topBtn =$('.top_btn');

    var mediaBox = $('#mediaBox').offset().top;

    $(window).on('scroll', function(){
        var scroll_top = $(this).scrollTop();
        console.log(scroll_top);
        if(scroll_top >= mediaBox){
            topBtn.fadeIn();

        }else{
            topBtn.fadeOut();
        }
    });


})(this.jQuery);