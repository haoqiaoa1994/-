//԰网页中间部分
$(function(){
  $("#settle .settle_item").mouseenter(function () {
    $(this).parent().find('.settle_box').removeClass('active').stop().animate({'opacity':'0'},200);
    $(this).next().addClass('active')
        .stop().animate({'opacity':'0.9'},500);
  });


//融资申请
  $("#financing9 a").click(function () {
    var index=$(this).parent().index()
   $('.scroll9:eq('+index+')').addClass('active').siblings('.scroll9').removeClass('active');
  });



  $("#financing9 a").click(function () {
    var index=$(this).parent().index()
    // $('.scroll9').fadeOut(0, function () {
      $('.scroll9:eq('+index+')').fadeIn(200);
    // });
  });

  $(".pager9").click(function () {
    $(".pager_link9 span").removeClass('active');
    $(this).addClass('active');
  });


  //
  var a = 0;
setInterval(function () {
  if(a==3){
    a=0;
  }
  $(".pager9")[a].click();
  a++
},1500);


});
//var bodyNode=document.querySelector('html')
//bodyNode={width:expression(document.body.clientWidth <= 1000? "1000px": "auto")};