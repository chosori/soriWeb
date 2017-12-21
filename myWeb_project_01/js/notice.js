// notice.js

(function($){
  var topBtn =$('.top_btn');

    var sectionBox = $('#sectionBox').offset().top;

    $(window).on('scroll', function(){
        var scroll_top = $(this).scrollTop();
        console.log(scroll_top);
        if(scroll_top >= sectionBox){
            topBtn.fadeIn();

        }else{
            topBtn.fadeOut();
        }
    });


})(this.jQuery);