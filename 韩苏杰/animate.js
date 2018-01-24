/*
  功能：获取指定节点对象的指定的样式属性的值（节点对象？样式属性？）
  形参：
    node 节点对象
    attr 样式属性名 string
  返回值：有，返回的是一个字符串  string
*/
function getStyleValue(node,attr){
  var styleNode; //style属性对象
  if(node.currentStyle==undefined){
    //标准
    styleNode = getComputedStyle(node,null);
  }else{
    //IE低版本
    styleNode = node.currentStyle;
  }
  return styleNode[attr];
}

/*
  功能：动画（动谁？动什么样式属性？目标值？速度？）
  形参：
    node 节点对象
    obj 对象  {width:800,left:600,top:500}
    speed 速度（毫秒） number
    fn 函数（在一个运动到达目标后执行） 可选
*/
function animate(node,obj,speed,fn){
  //为了避免定时器叠加（多个定时器操作一个物体），否则，运动混乱
  clearInterval(node.num);//node.num 的目的是保证每一个运动的物
  //产生一个定时器
  node.num = setInterval(function(){
    var flag = true; //表示是否要停止定时器，默认是停止的
    for(var key in obj){
      //key 代表对象中的每一个键名  样式属性名
      var v = parseInt(getStyleValue(node,key));
      //目标值： obj[key]
      if(v!=obj[key]){ //检测每一个样式属性值是否没有达到目标：
        flag = false;
      }
      //缓冲运动原理：步长越来越小
      //缓冲运动的公式：  (目标值-原有值)/基数
      var step = (obj[key]-v)/40;
      //对步长二次加工
      if(step>0){
        step = Math.ceil(step);
      }else if(step<0){
        step = Math.floor(step);
      }
      var v2 = v + step;//更改后的值
      node.style[key] = v2 + 'px';
    }
    if(flag){
      clearInterval(node.num);
      if(fn!=undefined){
        fn();
      }
    }


  },speed);
}