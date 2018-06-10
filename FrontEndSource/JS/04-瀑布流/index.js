/*
  瀑布流
*/
waterFull('main','box');

window.onresize = function(){
  var timer = null;
  clearTimeout(timer);
  timer = setTimeout(function(){
    waterFull('main','box');
  },200);
};

window.onscroll = function(){
  var oMain = document.getElementById('main');
  var timer = null;
  clearTimeout(timer);
  timer = setTimeout(function(){
    if(checkWillLoadImg()){
      var dataArr = [
        {"src":"images/img01.jpg"},
        {"src":"images/img11.jpg"},
        {"src":"images/img17.jpg"},
        {"src":"images/img40.jpg"},
        {"src":"images/img23.jpg"},
        {"src":"images/img15.jpg"},
        {"src":"images/img09.jpg"},
        {"src":"images/img06.jpg"},
        {"src":"images/img04.jpg"},
        {"src":"images/img03.jpg"},
        {"src":"images/img16.jpg"},
        {"src":"images/img14.jpg"},
        {"src":"images/img10.jpg"}
      ];

      for(var i = 0; i < dataArr.length; i++){
          var oBox = document.createElement('div');
          oBox.className = "box";
          var oPic = document.createElement('div');
          oPic.className = "pic";
          var oImg = document.createElement('img');
          oImg.src = dataArr[i].src;
          oPic.appendChild(oImg);
          oBox.appendChild(oPic);

          oMain.appendChild(oBox);
      }

      waterFull('main','box');
    }
  },200);
}

function waterFull(parent,child){
  // 父盒子
  var oParent = document.getElementById(parent);
  // 获取所有的父盒子
  var allBox = oParent.getElementsByClassName(child);
  // 获取一个子盒子的宽度
  var boxWidth = allBox[0].offsetWidth;
  // 获取屏幕的宽度
  var screenW = document.documentElement.clientWidth;
  // 求出列数
  var cols = parseInt(screenW / boxWidth);
  // 父盒子居中
  oParent.style.width = boxWidth * cols + 'px';

  // 定义高度heightArr
  var heightArr = [],boxHeight,minBoxHeight = 0,minBoxIndex = 0;

  for(var i = 0; i < allBox.length; i++){
    boxHeight = allBox[i].offsetHeight;

    if(i < cols){
      // 将第一行的图片的高度添加到数组中
        heightArr.push(boxHeight);
        allBox[i].style = '';
    }else{
      // console.log(heightArr);
      // console.log(heightArr.indexOf(Math.min.apply(null,heightArr)));
      minBoxHeight = Math.min.apply(this,heightArr);
      minBoxIndex = heightArr.indexOf(minBoxHeight);
      //设置第二行的图片位置
      allBox[i].style.position = 'absolute';
      allBox[i].style.left = minBoxIndex * boxWidth + 'px';
      allBox[i].style.top =  minBoxHeight + 'px';

      // 更新数组
      heightArr[minBoxIndex] += boxHeight;

    }
  }
}

function checkWillLoadImg(){
  var allBox = document.querySelectorAll('.box');
  var lastAllbox = allBox[allBox.length -1];
  var lastDis = lastAllbox.offsetHeight * 0.5 + lastAllbox.offsetTop;

  var screenH = document.documentElement.clientHeight;
  var scrollTop = scroll().top;

  return lastDis <= screenH + scrollTop;

}

function scroll(){
  if(window.pageXOffset != null){
    return {
      top: window.pageYOffset,
      left: window.pageYOffset
    }
  }else if(document.compatMode === "CSS1compat"){
    return {
      top: document.documentElement.scrollTop,
      left: document.documentElement.scrollLeft
    }
  }

  return {
    top: document.body.scrollTop,
    left: document.body.scrollLeft
  }
}

function client(){
  if(window.innerWidth){
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }else if(document.compatMode === 'CSS1Compat'){
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }

  return {
    width: document.body.clientWidth,
    height: document.body.clientHeight
  }
}
