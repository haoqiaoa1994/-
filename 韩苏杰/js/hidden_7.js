//��һ����---�����ĵ�һ���˵�
var lisNode_1_7 = document.querySelectorAll('.cebianlan_7 li');
var divsNode_1_7 = document.querySelectorAll('.xiala1_1_7');
for(var i = 0;i<lisNode_1_7.length;i++){
  lisNode_1_7[i].num = i;//����һ������,�����������������һ��li���±�
  lisNode_1_7[i].onmouseenter = function(){
    for(var a = 0;a<divsNode_1_7.length;a++){
      lisNode_1_7[a].className = 'cebianlan_li_7';
      divsNode_1_7[a].className = 'xiala1_1_7';
    };
    this.className = 'cebianlan_li_7 active';
    divsNode_1_7[this.num].className = 'xiala1_1_7 active';
  };
};



//�ڶ�����---�����뵼����---��Ʒ,�����б����
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

//��������---�����뵼����---�������
$(function(){
  $("#aaa_2_7").mouseenter(function(){
    $(".content1_2_7").stop().slideDown(200);
  }).mouseleave(function(){
    $(".content1_2_7").stop().slideUp(300);
  });
});

//���Ĳ���---�����뵼����---�ĵ���֧��
$(function(){
  $("#aaa_3_7").mouseenter(function(){
    $(".content1_3_7").stop().slideDown(200);
  }).mouseleave(function(){
    $(".content1_3_7").stop().slideUp(300);
  });
});

//���岿��---�����뵼����---��������̬
$(function(){
  $("#aaa_4_7").mouseenter(function(){
    $(".content1_4_7").stop().slideDown(200);
  }).mouseleave(function(){
    $(".content1_4_7").stop().slideUp(300);
  });
});

//���õ������ڹ������ʱ,�������ı���͸����
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

//���������˵����·������ϼ�ͷ����
$(function(){
  $(".bottom_7 img").click(function(){
    $(".content1_1_7").stop().slideUp(300);
    $(".content1_2_7").stop().slideUp(300);
    $(".content1_3_7").stop().slideUp(300);
    $(".content1_4_7").stop().slideUp(300);
  });
});




//�����޸������˵��еĹ�����
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










