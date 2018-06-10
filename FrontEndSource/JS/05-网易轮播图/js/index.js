window.onload = function(){
    var oSlide = document.getElementById('slide');
    var oSlideMain = document.querySelector('.slide-main');
    var slideMainImg = oSlideMain.children;
    var oSlideControl = oSlide.children[1];

    /* 创建 交互按钮 */
    for(var i = 0; i < slideMainImg.length; i++){
      var aSpan = document.createElement('span');
      aSpan.className = 'slide-control-icon';
      aSpan.innerText = slideMainImg.length - i - 1;
      oSlideControl.insertBefore(aSpan, oSlideControl.children[1]);
    }
    /* 让第一个交互点显示高亮 */
    oSlideControl.children[1].className = 'slide-control-icon current';

    var scrollW = oSlide.offsetWidth;
    for(var j = 1; j < slideMainImg.length; j++){
      slideMainImg[j].style.left = scrollW + 'px';
    }

    /* 事件绑定 */
    var iNow = 0;
    var controlChild = oSlideControl.children;
    for(var i = 0; i < controlChild.length; i++ ){
      controlChild[i].onclick = function(){
        if(this.className === 'slide-control-prev'){
          /*
            1.当前可视区域的图片快速右移
            2.上一张图片快速出现在可视区的左边
            3.让图片做动画进入
          */
          buffer(slideMainImg[iNow],{'left': scrollW});
          iNow--;
          if(iNow < 0){
            iNow = slideMainImg.length - 1;
          }
          slideMainImg[iNow].style.left = -scrollW + 'px';
          buffer(slideMainImg[iNow],{'left': 0});

        }else if(this.className === 'slide-control-next'){
          autoPlay();
        }else{
          /*
            1.用当前点击的索引和选中索引对比
            2.点击的 > 选中，相当于点击了右边的按钮
            3.点击的 < 选中，相当于点击了左边的按钮
          */
          var _index = parseInt(this.innerText);
          if(_index > iNow){
            buffer(slideMainImg[iNow],{'left': -scrollW});
            slideMainImg[_index].style.left = scrollW + 'px';
            iNow = _index;
            buffer(slideMainImg[iNow],{'left': 0});
          }else if(_index < iNow){
            buffer(slideMainImg[iNow],{'left': scrollW});
            slideMainImg[_index].style.left = -scrollW + 'px';
            iNow = _index;
            buffer(slideMainImg[iNow],{'left': 0});
          }
        }
        changeIndex();
      }
    }

    /* 切换交互点（索引） */
    function changeIndex(){
      for(var i = 1; i < controlChild.length - 1; i++){
        controlChild[i].className = 'slide-control-icon'
      }
      controlChild[iNow+1].className = 'slide-control-icon current';
    }

    function autoPlay(){
      /*
        1.当前可视区域的图片快速左移
        2.上一张图片快速出现在可视区的右边
        3.让图片做动画进入
      */
      buffer(slideMainImg[iNow],{'left': -scrollW});
      iNow++;
      if(iNow > slideMainImg.length - 1){
        iNow = 0;
      }
      slideMainImg[iNow].style.left = scrollW + 'px';
      buffer(slideMainImg[iNow],{'left': 0});

      changeIndex();
    }

    var timer = null;
    timer = setInterval(autoPlay,2000);

    oSlide.onmouseover = function(){
      clearInterval(timer);
    }
    oSlide.onmouseout = function(){
      timer = setInterval(autoPlay,2000);
    }
}






function buffer(obj,json,fn){
  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
      var flag = true;
      for(var attr in json){
        var iCurr = 0;
        if(attr == 'opacity'){
          iCurr = Math.round(parseFloat(getStyle(obj,attr)) * 100) || 0;
        }else{
          iCurr = parseInt(getStyle(obj,attr)) || 0;
        }

        var iSpeed = (json[attr] - iCurr) / 8;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

        if(iCurr != json[attr]){
          flag = false;
        }

        if(attr == 'opacity'){
          obj.style.filter = 'alpha(opacity:'+ (iSpeed + iCurr) +')';
          obj.style.opacity = (iSpeed + iCurr) / 100;
        }else if(attr == 'zIndex'){
          obj.style.zIndex = json[attr];
        }else{
          obj.style[attr] = iSpeed + iCurr + 'px';
        }
      }

      if(flag){
        clearInterval(obj.timer);
        if(fn){
          fn.call(obj);
        }
      }
  },30);
}

function getStyle(obj,attr){
  return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj,null)[attr];
}
