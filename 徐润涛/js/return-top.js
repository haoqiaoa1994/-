$(function (){
  $(window).scroll(function () {
    if($(document).scrollTop()>=600){
      $('.return-top').show(500);
    }else{
      $('.return-top').hide(500);
    }
  });
});
