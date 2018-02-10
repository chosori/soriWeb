(function($) {
  // 각 기능을 요약해서 처리할 함수로 바꾸기

// function ImportFile(makeFile, file, backgroundIf) {

//     var myDiv = wrap.append('<div class="'+ makeFile +'Wrap"></div>');
//     // var idFind = myDiv.attr({id:makeFile});
//     // console.log(makeFile);
//     var select = $('.'+makeFile+'Wrap');
//   select.load(file, function() {
//     select.addClass('clearfix');
//     var childrenBox = select.children();
//     childrenBox.css({margin:'0 auto'});

//     if(backgroundIf == true){
//       var bgColor = childrenBox.css('backgroundColor');
//       // console.log( 'select: ' + childrenBox, 'background: ' + bgColor );
//       select.css({'backgroundColor':bgColor});
//     }
//   });
// }
var wrap = $('#wrap');
var baseUrl  = './src/';
var loadFile = {headBox   : baseUrl + 'headBox.html',
               contentBox : baseUrl + 'main_contentBox_02.html',
               footBox   : baseUrl + 'footBox.html'};

ImportFile('headBox'   , loadFile.headBox);
ImportFile('contentBox' , loadFile.contentBox);
ImportFile('footBox'   , loadFile.footBox);

})(this.jQuery);