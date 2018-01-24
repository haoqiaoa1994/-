//第一部分---下拉的第一个菜单
var lisNode_1_7 = document.querySelectorAll('.cebianlan_7 li');
var divsNode_1_7 = document.querySelectorAll('.xiala1_1_7');
for(var i = 0;i<lisNode_1_7.length;i++){
  lisNode_1_7[i].num = i;//设置一个属性,用来接收鼠标进入的那一个li的下标
  lisNode_1_7[i].onmouseenter = function(){
    for(var a = 0;a<divsNode_1_7.length;a++){
      lisNode_1_7[a].className = 'cebianlan_li_7';
      divsNode_1_7[a].className = 'xiala1_1_7';
    };
    this.className = 'cebianlan_li_7 active';
    divsNode_1_7[this.num].className = 'xiala1_1_7 active';
  };
};



//第二部分---鼠标进入导航栏---产品,下拉列表出现
$(function(){
  $("#aaa_1_7").mouseenter(function(){
    $(".content1_1_7").stop().slideDown(200);
  }).mouseleave(function(){
    $(".content1_1_7").stop().slideUp(200,function(){
      $("#mmm_1_7").addClass("active").siblings().removeClass("active");
      $("#poi_1_7").addClass("active").siblings().removeClass("active");
    });

  });
});

//第三部分---鼠标进入导航栏---解决方案
$(function(){
  $("#aaa_2_7").mouseenter(function(){
    $(".content1_2_7").stop().slideDown(200);
  }).mouseleave(function(){
    $(".content1_2_7").stop().slideUp(300);
  });
});

//第四部分---鼠标进入导航栏---文档与支持
$(function(){
  $("#aaa_3_7").mouseenter(function(){
    $(".content1_3_7").stop().slideDown(200);
  }).mouseleave(function(){
    $(".content1_3_7").stop().slideUp(300);
  });
});

//第五部分---鼠标进入导航栏---合作与生态
$(function(){
  $("#aaa_4_7").mouseenter(function(){
    $(".content1_4_7").stop().slideDown(200);
  }).mouseleave(function(){
    $(".content1_4_7").stop().slideUp(300);
  });
});

//设置导航栏在滚轴滚动时,导航栏的背景透明度
var topcontain_7Node = document.querySelector('.topcontain_7');
window.onscroll = function(){
  var v1 = document.documentElement.scrollTop||document.body.scrollTop;
  if(v1>0){
    topcontain_7Node.style.backgroundColor = "rgba(33,47,68,1)";
    //topcontain_7Node.style.backgroundColor = "#fff";
  }else{
    topcontain_7Node.style.backgroundColor = "rgba(33,47,68,0)";
  }
};

//设置下拉菜单最下方的向上箭头功能
$(function(){
  $(".bottom_7 img").click(function(){
    $(".content1_1_7").stop().slideUp(300);
    $(".content1_2_7").stop().slideUp(300);
    $(".content1_3_7").stop().slideUp(300);
    $(".content1_4_7").stop().slideUp(300);
  });
});




//尝试修改下拉菜单中的滚动条
//var aaa_1_7Node = document.querySelector('#aaa_1_7');
//var xiala1_1_7Node = document.querySelector('#poi_1_7');
//aaa_1_7Node.onmouseenter = function(){
//  var count = 0;
//  xiala1_1_7Node.onmousewheel = function(e){
//    console.log(e);
//    if(e.deltaY>0&&xiala1_1_7Node.style.bottom<0){
//      count--;
//      //console.log();
//      xiala1_1_7Node.style.top = count*20 + 'px';
//    }else if(e.deltaY<0&&xiala1_1_7Node.style.top<0){
//      count++;
//      xiala1_1_7Node.style.top = count*20 + 'px';
//    }
//  };
//};










