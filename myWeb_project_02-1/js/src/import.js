(function($){
var wrap = $('#wrap');

var baseUrl = '../base/';
var loadFile = { 
                headBox : baseUrl + 'headBox.html',
                footBox : baseUrl + 'footBox.html'

               };

// headBox import ======================
wrap.prepend('<div id="headBoxWrap"></div>');




var headBoxWrap = $('#headBoxWrap');
headBoxWrap.load(loadFile.headBox, function(){
var headBox = $('#headBox');
var headBoxBg =headBox.css('backgroundColor');
headBoxWrap.css({'backgroundColor':headBoxBg});


// search -------------------------
var searchBtn = $('.search_btn');
var searchBox = $('#searchBox');
var searchTie = $('.searchTie');
var bodyW = $('.searchTie').width();
var timed = 800;

var active = function(){$('.active').css({transform:'translate(0)'}) };

searchBtn.on('click',['button'],function(e){
  e.preventDefault();
  // 1.slide기능으로 사라지거나 나타나게 만들기.
  // cnbBox.slideToggle();

  // 2.transform 기능으로 움지여서 처리하기
  var searchTr = searchBox.hasClass('active');
  //hasClass: class값이 있니 없니 확인하는것
  if(!searchTr){
  searchBox.addClass('active');
  searchTie.addClass('active');
  searchBtn.addClass('active');
  searchBtn.css({color:'#333'});
  active();
  }else{
  searchBox.removeClass('active');
  searchTie.removeClass('active');
  searchBtn.removeClass('active');
  searchBtn.css({color:'#fff'});

  }
});

  // var lnbBtn = $('.lnb01');
  // var gnbUl = lnbBtn.children('ul');

  // lnbBtn.on('click', function(evt){
  //   evt.preventDefault();
  //   // gnbUl.toggle();
  //   gnbUl.slideToggle();
  //   // gnbUl.fadeToggle();
  // });


});

// footBox import ========================
wrap.append('<div id="footBoxWrap"></div>');

var footBoxWrap =$('#footBoxWrap');
footBoxWrap.load(loadFile.footBox, function(){
var footBox = $('#footBox');
var footBoxBg = footBox.css('backgroundColor');
footBoxWrap.css({'backgroundColor':footBoxBg});
});



})(this.jQuery);