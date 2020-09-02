$(function(){
  $(window).scroll(function (){
    $('.fadein').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      //ディスプレイ画面の下から200pxの位置という意味
      if (scroll > targetElement - windowHeight + 200){
        $(this).addClass("active");
      }
    });
  });
  
  //画面模写サイトフェードイン
  $(".sample1").click(function(){
    $("#show").fadeIn(1000);
  });
  $(".close").click(function(){
    $("#show").fadeOut(1000);
  });
  $(".sample2").click(function(){
    $("#show2").fadeIn(1000);
  });
  $(".close").click(function(){
    $("#show2").fadeOut(1000);
  });
  $(".sample3").click(function(){
    $("#show3").fadeIn(1000);
  });
  $(".close").click(function(){
    $("#show3").fadeOut(1000);
  });
  $('a[href^="#"]').click(function(){
    $('.menu').removeClass("is-active");
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度（ミリ秒）
    var speed = 400;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
    
  });

  //ハンバーガーメニュー
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
});
$(window).on('load',function(){
  // テキストを<span></span>で囲む
  $('.typing').children().addBack().contents().each(function() {
  if (this.nodeType == 3) {
  $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
  }
  });
  // 一文字ずつフェードインさせる
  $('.typing').css({'opacity':1});
  for (var i = 0; i <= $('.typing').children().length; i++) {
  $('.typing').children('span:eq('+i+')').delay(110*i).animate({'opacity':1},50);
  };
});
