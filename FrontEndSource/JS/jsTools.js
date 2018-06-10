// 封装 scroll 滚动条的距离;
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

// 封装 client 获取屏幕的宽度 高度;
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

// 缓动动画
function move(obj,json,fn){
  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
      var flag = true;
      for(var attr in json){
        var iCurr = 0;
        if(attr == 'opacity'){
          if(Math.round(parseFloat(getStyle(obj,attr))*100)==0){
            iCurr = Math.round(parseFloat(getStyle(obj,attr)) * 100) || 0;
          }else{
            iCurr = Math.round(parseFloat(getStyle(obj,attr)) * 100) || 100;
          }
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
