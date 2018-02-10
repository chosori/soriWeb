  (function($){
    //     // jQuery
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
    }); //rightBtn클릭

// .top_btn
    var topBtn =$('.top_btn');

    var bannerBox = $('#bannerBox').offset().top;

    $(window).on('scroll', function(){
        var scroll_top = $(this).scrollTop();
        console.log(scroll_top);
        if(scroll_top >= bannerBox){
            topBtn.fadeIn();

        }else{
            topBtn.fadeOut();
        }
    });



    // #skiinfoBox
  var baseUrl = "../../multi/video/";
  var videoList = [
                    {title:'uiaa', 
                    videoTitle:'2018년 경기 홍보 영상'},
                   
                  ];

  var videoListLength = videoList.length;

  // video에 첫번째 영상 담기
  var video = $('.skimedia_player').find('video');

  var i = 0;

  var playList = function(i){

    var playOrther = videoList[i];
    var playTitle = playOrther.title;
    var playStart = baseUrl + playTitle + '.mp4';

    return playStart;
  }; // playList;

  // video.append('<source src="' + playList(i) + '" type=video/mp4" />');
  video.prepend('<source />')
  var videoSrc = video.find('source');
  videoSrc.attr({'src' :playList(i), 'type': 'video/mp4'});

  var videoBtn = $('.play_btn');
  var pauseBtn = $('.stop_btn');

   videoBtn.on('click', function(e){
      e.preventDefault();
        video[0].play();
        videoBtn.removeClass('view');
        pauseBtn.addClass('view');
    });

   pauseBtn.on('click', function(e){
      e.preventDefault();
        video[0].pause();
        pauseBtn.removeClass('view');
        videoBtn.addClass('view');
    });




    
    })(this.jQuery);