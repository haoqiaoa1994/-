//¾Û½¹ÐÐÒµ
$('.jjhy5 .pro .left5 li').mouseenter(function () {
  $(this).addClass('bgc5').siblings('li').removeClass('bgc5');
  var index=$(this).index();
  $('.jjhy5 .right5>ul>li:eq('+index+')').addClass('active5').siblings('li').removeClass('active5');
  var bgim0='url("../img/edu-bg.png") no-repeat center';
  var bgim1='url("../img/game-bg.png") no-repeat center';
  var bgim2='url("../img/gold-bg.png") no-repeat center';
  var bgim3='url("../img/med-bg.png") no-repeat center';
  switch (index){
    case 0:
      //$('.jjhy5').animate({"background":"url('../img/edu-bg.png') no-repeat center"},200);
      $('.jjhy5').css("background",bgim0);
      break;
    case 1:
      $('.jjhy5').css("background",bgim1);
      break;
    case 2:
      $('.jjhy5').css("background",bgim2);
      break;
    case 3:
      $('.jjhy5').css("background",bgim3);
      break;
  }

});