/**
 * Created by 62633 on 2017/12/7.
 */
$(function () {
    $(".m_t_t2>span").mouseenter(function () {
        $(this).addClass("blue2").siblings('span').removeClass('blue2');
        var id = $(this).index();
        console.log(id);
        $(".middle_ad2>div:eq("+id+")").addClass('active2').siblings('div').removeClass('active2')
    });
});

////////////////////////////////////////////////////////////////////////

$(function () {
    $(".index2>li").click(function () {
        $(this).addClass('li_blue2').siblings('li').removeClass('li_blue2');
        var id = $(this).index();
        // alert(id);
        // if (id == 0) {
        //     $('.middle_ad2>.w>.a0').addClass('active2').removeClass('hide2');
        //     $('.middle_ad2>.w>.a1').addClass('active2').removeClass('hide2');
        //     $('.middle_ad2>.w>.a2').addClass('active2').removeClass('hide2');
        //     $('.middle_ad2>.w>.a3').addClass('active2').removeClass('hide2');
        //     $('.middle_ad2>.w>.a4').addClass('active2').removeClass('hide2');
        //     $('.middle_ad2>.w>.a5').addClass('active2').removeClass('hide2');
        //     $('.middle_ad2>.w>.a6').addClass('active2').removeClass('hide2');
        //     $('.middle_ad2>.w>.a7').addClass('active2').removeClass('hide2').nextAll().removeClass('active2');
        // }
        // if (id == 1) {
        //     $(".middle_ad2>.w>.a8").prevAll().addClass('hide2').end().removeClass('hide2').addClass('active2');
        //     $(".middle_ad2>.w>.a9").removeClass('hide2').addClass('active2')
        //     $(".middle_ad2>.w>.a10").removeClass('hide2').addClass('active2')
        //     $(".middle_ad2>.w>.a11").removeClass('hide2').addClass('active2')
        //     $(".middle_ad2>.w>.a12").removeClass('hide2').addClass('active2')
        //     $(".middle_ad2>.w>.a13").removeClass('hide2').addClass('active2')
        //     $(".middle_ad2>.w>.a14").removeClass('hide2').addClass('active2');
        //     $(".middle_ad2>.w>.a15").removeClass('hide2').addClass('active2');
        // }
        $(".middle_ad2>.quanbu2>.w>.middle_adh2>div:eq("+id+")").addClass('active2').siblings('div').removeClass('active2');
    });
});