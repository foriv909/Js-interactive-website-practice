var elChangeColor =document.getElementById('changeColor');
//取得id屬性為changeColor的 element ,並儲存在變數elChangeColor.
elChangeColor.addEventListener('click' , changeColor);

//將元件elChangeColor綁上事件監聽,當發生"點擊"事情時
//會呼叫changeColor函式.

var currentQuote ='', currentAuthor ='';  //用來儲存API回應的變數

var colors=[
  '#16a085', '#27ae60', '#2c3e50', '#f39c12', 
  '#e74c3c', '#9b59b6', '#FB6964', '#342224', 
  "#472E32", "#BDBB99", "#77B1A9", "#73A857"
];

var strCollection =[
  'I graduated from Ming New University of Science and Technology.',
  'I worked as an acting teacher in primary school for a year.',
  "I love to buy sneakers, but I can't bear to wear them. This matter bothers me myself.",
  'When I was 25, I came into contact with front-end development and found it to be a very interesting skill, and I wanted my job to be front-end engineers.',
  "I'm going to be a front-end engineer and I'm practicing how to use \"JavaScript\" to create interactive Web pages."
]; 




$(document).ready(function(){
  changeColor();
});

function changeColor(){
  
  
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(r) {
      if (typeof r === 'string') {
       r = JSON.parse(r); 
      }
      if (Array.isArray(r)) {
       r = r[0];
      }
      currentQuote = r.quote;
      currentAuthor = r.author;
      console.log(currentQuote);
      console.log(currentAuthor);
      $('.text').text(currentQuote);
      $('.author-text').text(currentAuthor); 
    }
  });

    //定義物件colors裡的顏色種類
  var color = Math.floor(Math.random() * colors.length);
    //定義變數color的值 = 隨機數(0~0.9)乘上變數colors的長度出來的值,最後再向下取整數.
  
    //定義物件strCollection的字串種類
  var quoteStrr = Math.floor(Math.random() * strCollection.length);
    //定義變數quoteStr的值 = 隨機數(0~0.9)乘上變數colors的長度出來的值,最後再向下取整數.
  $("#html_background").animate({   //取得 id 屬性為html_background的element,進行動畫效果呈現
    backgroundColor: colors[color], //修改背景顏色
    color: colors[color]            //修改文字顏色
    }, 500);                       //動畫展示的時間長度為1000毫秒
  $("#allBody_container").animate({
    backgroundColor: colors[color],
    color: colors[color]
    }, 500);
  $(".button").animate({
    backgroundColor: colors[color]  //修改背景顏色
    }, 500);
  $("#tweet-button").animate({
    backgroundColor: colors[color]  //修改背景顏色
    }, 500);
  $("#tumblr-button").animate({
    backgroundColor: colors[color]  //修改背景顏色
    }, 500);
  $('.text').animate({        //取得class屬性為quote-text class的element,進行動畫效果呈現.
    opacity : 0                     //將element透明度由1~0.
    }, 500,                         //動畫展示的時間長度為500毫秒.
    function(){                     //動畫效果呈現結束後.
      $('.text').animate({
        opacity : 1                 //element透明度由0~1
        }, 500);                   //動畫展示的時間長度為500毫秒
        $('.text').text(currentQuote); //取得class屬性為text的element,進行text變更.
    
                                                  //內容由strCollection物件中選取.
                                                  
    });
  $('.author-text').animate({
    opacity: 0
    }, 500 , function(){
      $('.author-text').animate({
        opacity : 1
        }, 500); 
        $('.author-text').text(currentAuthor);
           
                     //動畫展示的時間長度為1500毫秒
    });

    
    /*
    document.getElementById("html_background").style.backgroundColor = colors[color];
    document.getElementById("html_background").style.color = colors[color];
    document.getElementById("allBody_container").style.backgroundColor = colors[color];
    document.getElementById("allBody_container").style.color = colors[color];
    document.querySelector("button").style.backgroundColor = colors[color];
    document.getElementById("tweet-button").style.backgroundColor = colors[color];
    document.getElementById("tumblr-button").style.backgroundColor = colors[color];
    */
    //在DOM有"body的元件"的"style背景色"在 colors有的顏色之中變更.
    //在DOM有"body的元件"的"style文本"在 colors有的顏色之中變更.
    /* -----jQuery-----
    $('#html_background').css('background-color' , colors[color]);
    $('#html_background').css('color' , colors[color]);
    $('#allBody_container').css('background-color' , colors[color]);
    $('#allBody_container').css('color' , colors[color]);
    $('button').css('background-color' , colors[color]);
    $('a#tweet-button').css('background-color' , colors[color]);
    $('a#tumblr-button').css('background-color' , colors[color]);
    
    */
  }
  
  

