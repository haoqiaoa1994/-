$(function(){
    //用户业务系统
    $('.scene8 .photo81').mouseenter(function(){
        $('.picture81').fadeIn(1000);
        $(this).fadeOut(1000);
        var index=$(this).index();
        $('.scene8 .txt8:eq(0)').addClass('active8').siblings('.txt8').removeClass('active8');
    });
    $('.scene8 .picture81').mouseleave(function(){
        $('.picture81').fadeOut(1000);
        $('.scene8 .photo81').fadeIn(1000);
    });
   //组织管理
    $('.scene8 .photo82').mouseenter(function(){
        $('.picture82').fadeIn(1000);
        $(this).fadeOut(1000);
        var index=$(this).index();
        $('.scene8 .txt8:eq(1)').addClass('active8').siblings('.txt8').removeClass('active8');

    });
    $('.scene8 .picture82').mouseleave(function(){
        $('.picture82').fadeOut(1000);
        $('.scene8 .photo82').fadeIn(1000);
    });
    //资源管控
    $('.scene8 .photo83').mouseenter(function(){
        $('.picture83').fadeIn(1000);
        $(this).fadeOut(1000);
        var index=$(this).index();
        $('.scene8 .txt8:eq(2)').addClass('active8').siblings(' .txt8').removeClass('active8');

    });
    $('.scene8 .picture83').mouseleave(function(){
        $('.picture83').fadeOut(1000);
        $('.scene8 .photo83').fadeIn(1000);
    });
    //产品优势
    $('.advantage8 .line8 .pvivate8 ').click(function(){
        $('.advantage8 .p8').addClass('active8');
        $('.advantage8 .public8').removeClass('active8');
       // $('.advantage8 .line8 .pvivate8 ').css('color','red');
    });
    //$('.advantage8 .line8 .pvivate8 ').mouseenter(function(){
    //    $('.advantage8 .line8 .pvivate8 ').css('color','red');
   // });
    $('.advantage8 .line8 .public8').click(function(){
        $('.advantage8 .public8').addClass('active8');
        $('.advantage8 .p8').removeClass('active8');
    });
});



