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

    var contentBox = $('#contentBox').offset().top;

    $(window).on('scroll', function(){
        var scroll_top = $(this).scrollTop();
        console.log(scroll_top);
        if(scroll_top >= contentBox){
            topBtn.fadeIn();

        }else{
            topBtn.fadeOut();
        }
    });




    // var bannerBox = $('.bannerImg');
    // var footBox = $('#footBox');
    // var footOffset = footBox.offset().top;
    // console.log(footOffset);
    // var bodyH = $('body').height();
    // console.log(bodyH);
    // var myView = footOffset - bodyH;
    // console.log(myView);
    // $(window).on('scroll', function(){
    //   var winScroll = $(this).scrollTop();
    //   bannerBox.css({backgroundPosition:'center'+' '+ -winScroll/2+'px'});
    //   if(myView <= winScroll){
    //     var footView =winScroll - myView;
    //     console.log(footView);
    //     footBox.css({backgroundPosition:'center'+' '+ -footView/3+'px'});
    //   }

    // });


  var bannerBox = $('.bannerImg');
    var footBox = $('#contentBox');
    var footOffset = footBox.offset().top;
    console.log(footOffset);
    var bodyH = $('body').height();
    console.log(bodyH);
    var myView = footOffset - bodyH;
    console.log(myView);
    $(window).on('scroll', function(){
      var winScroll = $(this).scrollTop();
      bannerBox.css({backgroundPosition:'center'+' '+ -winScroll/4+'px'});
      if(myView <= winScroll){
        var footView =winScroll - myView;
        console.log(footView);
        footBox.css({backgroundPosition:'center'+' '+ -footView/3+'px'});
      }

    });






   // - jQuery End
})(this.jQuery);