/**
* Created by win10 on 2017/12/3.
*/
$(function(){
  //banner1部分结束
  //首页图片淡入淡出
  var index = 0;
  setInterval(function() {
    $('.banner1_img .img:eq(5)').fadeOut(2000, function () {
      $('.banner1_img .img:eq(4)').fadeOut(2000, function () {
        $('.banner1_img .img:eq(3)').fadeOut(2000, function () {
          $('.banner1_img .img:eq(2)').fadeOut(2000, function () {
            $('.banner1_img .img:eq(1)').fadeOut(2000, function () {
              for(var i=4;i>0;i--){
                $('.banner1_img .img:eq('+i+')').fadeIn(2000);
              }
            });
          });
        });
      });
    });
  }, 2000);
  //五个li轮流播放
  setInterval(function(){
    if(index>4){
      index=0
    }
    $('.banner1 ul li span:eq('+index+')').animate({'width':48},2000,function(){
      $(this).css('width','0');
    });
    index++;
  },2000)
  //banner1部分结束

  //newUser新用户和入门指南部分开始
  $('.newUser .content').mouseenter(function(){
    $(this).css({
      'backgroundColor':'#ccc'
    });
  }).mouseleave(function(){
    $(this).css({
      'backgroundColor':'#f0f3f7'
    });
  });
//newUser新用户和入门指南部分结束

  //丰富、稳定、可靠的场景化云服务开始

  $('.cloudServe .serveContent').mouseenter(function(){
    $(this).animate({'top':60,'width':400},100);
    $(this).find('.top').css({'backgroundColor':'blue','color':'#fff'});
  }).mouseleave(function(){
    $(this).animate({'top':100,'width':370},100);
    $(this).find('.top').css({'backgroundColor':'#f5f7fa','color':'#000'});
  });
  //丰富、稳定、可靠的场景化云服务结束

  //持续发展助力客户成功部分开始
  $('.development').mouseenter(function(){
    $('.development .content:eq(1)').animate({'bottom':200},500);
    $('.development .content:eq(2)').animate({'bottom':80,'left':270},500);
    $('.development .content:eq(0)').animate({'bottom':80,'left':810},500);
    $('.development .content:eq(3)').animate({'bottom':30},500);
    $('.development .content:eq(4)').animate({'bottom':30},500);
  }).mouseleave(function(){
    $('.development .content:eq(2)').animate({'bottom':80,'left':810},500);
    $('.development .content:eq(0)').animate({'bottom':80,'left':270},500);
    $('.development .content').animate({'bottom':0},500);

  });
  //持续发展助力客户成功部分结束

  //他们都在使用网易云部分开始
  //内容部分
$('.useCloud li').mouseenter(function(){
  $(this).find('div.display').fadeIn(500);
}).mouseleave(function(){
  $(this).find('div.display').fadeOut(500);
});
//底部

//他们都在使用网易云部分结束
});



