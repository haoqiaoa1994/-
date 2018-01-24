//设置小图标
//获取小图标对象
var icon=document.querySelector('.icon3');
var body=document.querySelector('body');
//window.onscroll=function(){
//  //获取滚动条被卷去的元素的距离
//  var v2=document.documentElement.scrollTop||document.body.scrollTop;
//  if(v2>=500){
//    icon.className='icon3 active3';
//  }else{
//    icon.className='icon3';
//  }
//};
//中部的轮播图
//获取左侧按钮
var leftBtn=document.querySelector('.lefter');
//获取右侧按钮
var rightBtn=document.querySelector('.righter');
//获取内容板块
var content=document.querySelector('.ccc');
//获取可视区域板块
var cNode=document.querySelector('.cc');
//声明一个全局变量index
var index=0;
//给右侧按钮绑定点击事件 并且用animate实现动画效果
var lock=true;//开
rightBtn.onclick=function(){
  if(lock){
    lock=false;//关
    index++;
    if(index>=2){
      index=2;
    }
    var targetValue= index * -305;//目标值
    var temp=index;//第三方变量
    animate(content,{left:targetValue},10,function(){
      lock=true;
    })
  }
};
//给左侧按钮绑定点击事件,  并且用animate实现动画效果
leftBtn.onclick=function(){
  if(lock){
    lock=false;
    index--;
    if(index<0){
      index=0;
    }
    var targetValue=index*-305;
    var temp=index;
    animate(content,{left:targetValue},10,function(){
      lock=true;
    });
  }
};
//给鼠标添加移入事件
cNode.onmouseenter=function(){
  leftBtn.style.display='block';
  rightBtn.style.display='block';
};
//给鼠标添加移开事件
cNode.onmouseleave=function(){
  leftBtn.style.display='none';
  rightBtn.style.display='none';
};
//获取每个div对象
var divBtn=document.querySelectorAll('.ccc>div');
var small=document.querySelectorAll('.eee1');
var big=document.querySelectorAll('.ddd1');
for(var k=0;k<divBtn.length;k++){
  divBtn[k].num=k;
  divBtn[k].onmouseenter=function(){

    for(var j=0;j<divBtn.length;j++){
      small[j].style.display = 'none';
      big[j].style.top = '80px';
      big[j].style.backgroundColor = '';
    }
    small[this.num].style.display = 'block';
    //big[this.num].style.top = 0;
    big[this.num].style.backgroundColor = 'rgba(255,29,81,0.6)';
    if(lock) {
      lock = false;
    }
    $(big[this.num]).animate({"top":0},function(){
      lock=true;
    });
  };
  divBtn[k].onmouseleave=function(){
    for(var j=0;j<divBtn.length;j++){
      small[j].style.display = 'none';
      big[j].style.top = '80px';
      big[j].style.backgroundColor = '';
    }
    small[this.num].style.display = 'none';
    big[this.num].style.top = '80px';
    big[this.num].style.backgroundColor = '';
    if(lock) {
      lock = false;
    }
    $(big[this.num]).animate({"top":'80px'},0,function(){
      lock=true;
    });
  };
}