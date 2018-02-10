(function($) {
  // 각 기능을 요약해서 처리할 함수로 바꾸기

var wrap = $('#wrap');
var baseUrl  = './src/';
var loadFile = {headBox   : baseUrl + 'headBox.html',
               contentBox : baseUrl + 'main_contentBox_01.html',
               footBox   : baseUrl + 'footBox.html'};

ImportFile('headBox'   , loadFile.headBox);
ImportFile('contentBox' , loadFile.contentBox);
ImportFile('footBox'   , loadFile.footBox);


// wrap.append('<header id="headBox">');
// $('#headBox').load('./src/headBox.html',function(){
//     var gnbBtn = $('.open_btn');
//     var gnb = $('#gnb').find('ul');
//     var logo = $('h1');
  
//     gnbBtn.on('click',function(e){
//       e.preventDefault();
//       gnb.toggle();
//       logo.toggleClass('active');
//       var active = gnbBtn.toggleClass('active');
//     });
// });

// $('#bannerBox').load('../../html/src/main_contentBox_01.html',function(){
//     var banner = $('.banner');
//     // var bannerUl = $('.banner>ul');
//     var bannerUl = banner.children('ul');
//     // var bannerLast = $('.banner>ul>li');
//     var bannerLast = bannerUl.children('li');
    
    
//     bannerLast.last().prependTo(bannerUl);
//     bannerUl.css({marginLeft:'-100%'});
//     banner.css({overflow:'hidden'});
    
//     var leftBtn =$('.btn').children('button').first();
//     var rightBtn =$('.btn').children('button').last();
    
//     leftBtn.on('click', function(event){
//         event.preventDefault(); //??
    
//         bannerUl.stop(false,true).animate({marginLeft:0}, function(){
//             bannerLast = bannerUl.children('li').last();
//             bannerLast.prependTo(bannerUl);
//             bannerUl.css({marginLeft:'-100%'});
//         });
//     }); //LeftBtn클릭
    
//     rightBtn.on('click', function(event){
//         event.preventDefault(); //??
    
//         bannerUl.stop(false,true).animate({marginLeft:'-200%'}, function(){
//             bannerLast = bannerUl.children('li').first();
//             bannerLast.appendTo(bannerUl);
//             bannerUl.css({marginLeft:'-100%'});
//         });
//     }); //rightBtn클릭



//     var topBtn =$('.top_btn');

//     var bannerBox = $('#bannerBox').offset().top;

//     $(window).on('scroll', function(){
//         var scroll_top = $(this).scrollTop();
//         console.log(scroll_top);
//         if(scroll_top >= bannerBox){
//             topBtn.fadeIn();

//         }else{
//             topBtn.fadeOut();
//         }
//     });
// });



})(this.jQuery);