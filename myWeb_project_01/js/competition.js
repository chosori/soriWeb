// competition.js

(function($){
  var slide = $('.slideDate');
  var slideUl = slide.children('ul');
  var slideLast = slideUl.children('li');


  slideLast.last().prependTo(slideUl);
  slideUl.css({marginLeft:'-100%'});
  slide.css({overflow:'hidden'});

  var leftBtn = $('.btn').children('button').first();
  var rightBtn = $('.btn').children('button').last();

  leftBtn.on('click', function(event){
    event.preventDefault();

    slideUl.stop(false,true).animate({marginLeft:0}, function(){
      slideLast = slideUl.children('li').last();
      slideLast.prependTo(slideUl);
      slideUl.css({marginLeft:'-100%'});

    });

  });

  rightBtn.on('click', function(event){
    event.preventDefault();

    slideUl.stop(false,true).animate({marginLeft:'-200'}, function(){
      slideLast= slideUl.children('li').first();
      slideLast.appendTo(slideUl);
      slideUl.css({marginLeft:'-100%'});

    });
  });


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