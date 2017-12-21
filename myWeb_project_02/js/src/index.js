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



  var banner = $('.banner');
    // var bannerUl = $('.banner>ul');
    var bannerUl = banner.children('ul');
    // var bannerLast = $('.banner>ul>li');
    var bannerLast = bannerUl.children('li');
    
    
    bannerLast.last().prependTo(bannerUl);
    bannerUl.css({marginLeft:'-100%'});
    banner.css({overflow:'hidden'});
    
    var leftBtn =$('.btn').children('button').first();
    var rightBtn =$('.btn').children('button').last();
    
    leftBtn.on('click', function(event){
        event.preventDefault(); //??
    
        bannerUl.stop(false,true).animate({marginLeft:0}, function(){
            bannerLast = bannerUl.children('li').last();
            bannerLast.prependTo(bannerUl);
            bannerUl.css({marginLeft:'-100%'});
        });
    }); //LeftBtn클릭
    
    rightBtn.on('click', function(event){
        event.preventDefault(); //??
    
        bannerUl.stop(false,true).animate({marginLeft:'-200%'}, function(){
            bannerLast = bannerUl.children('li').first();
            bannerLast.appendTo(bannerUl);
            bannerUl.css({marginLeft:'-100%'});
        });
    }); //LeftBtn클릭




    var topBtn =$('.top_btn');

    var bannerBox = $('.banner').offset().top;

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