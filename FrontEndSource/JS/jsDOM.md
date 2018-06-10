## 选取元素
#### javascript 通过ID获取元素
. document.getElementById(id选择器)
#### javascript 通过Class获取元素
. document.getElementsByClassName(class选择器) ==> 得到一组被选元素的集合(类数组)
#### javascript 通过Class获取元素
. document.getElementsByClassName(class选择器) ==> 得到一组被选元素的集合(类数组)
#### javascript 通过获取标签元素
. document.getElementsByTagName(标签元素名) ==> 得到一组被选元素的集合(类数组)
---
## 获取节点
#### 获取父节点
. 当前元素.parentNode
#### 获取下一个兄弟节点
. 当前元素.nextSibling  || 当前元素.nextElementSibling
#### 获取上一个兄弟节点
. 当前元素.previousSibling  || 当前元素.previousElementSibling
---
## 访问节点
#### 创建节点
. document.createElement(新节点名称)
#### 插入节点
. 父节点.appendChild(新节点)
. 父节点.insertBefore(新节点，参考节点) 插入到参考节点的前面
#### 删除节点
. 父节点.removeChild(子节点)
. 当前节点.remove();
#### 复制节点
. 要复制的.cloneNode(参数) 参数：boolean  
	true: 拷贝节点以及节点的内容 （深拷贝)
​	false: 之拷贝节点不会拷贝节点内容 （浅拷贝）

## 属性操作
#### 获取节点属性
. 当前节点.getAttribute(属性名)
#### 设置节点属性
. 当前节点.setAttribute(属性名，属性值)
#### 删除节点属性
. 当前节点.removeAttribute(属性名)
---
##### 获取字符串的真实长度的方法
```
  function getStringLength(str){
    var len = 0, code = 0;
    for(var i = 0; i < str.length; i++){
      code = str.charCodeAt(i);
    }
    if(code >=0 && code <= 127){
      len += 1;
    }else{
      len += 2;
    }

    return len;
  }
```

---
##### 算出每个元素在行中所在位置   parseInt( 元素索引值  / 总列数) 得出 行数
##### 算出每个元素在列中所在位置   parseInt( 元素索引值  % 总列数) 得出 列数
```
function RowCol(parentNode,allCol) {
  var boxW = 220, boxH = 360, XYmargin = 15;
  for(var i = 0; i < parentNode.children.length; i++){
    // 算出每个元素在行中所在位置   parseInt( 元素索引值  / 总列数) 得出 行数
    // 算出每个元素在列中所在位置   parseInt( 元素索引值  % 总列数) 得出 列数
    var row = parseInt(i / allCol);
    var col = parseInt(i % allCol);
    // console.log('当前元素所在行数' + row +' ; '+ '当前元素所在列数'+ col);
    parentNode.children[i].style.position = 'absolute';
    parentNode.children[i].style.left = col * (boxW + XYmargin) + 'px';
    parentNode.children[i].style.top = row * (boxH + XYmargin) + 'px';
  }
}
```
---

>   放大镜特效核心算法
    方法一：
    小盒子移动的距离     小盒子的宽度
    -------------  = ------------  ===>  大盒子移动的距离 = 小盒子移动的距离 * 大盒子的宽度 / 小盒子的宽度
    大盒子移动的距离     大盒子的宽度
    方法二：
    小盒子移动的距离 / 大盒子移动的距离 = 大盒子的宽度 / 小盒子的宽度 ==> 大盒子移动的距离 / (大盒子的宽度 / 小盒子的宽度)

---

>   滚动条特效核心算法
    . 获取滚动条长度？
      滚动条长度 / 盒子的长度 = 盒子的长度 / 内容的长度 ==> 滚动条长度 = （盒子的长度 / 内容的长度）* 盒子的长度
    .拖动滚动条内容走的长度？
      内容走的距离 / 滚动条走的距离 = （内容的长度 - 盒子的长度）/ (盒子的长度 - 滚动条的长度) ==> 内容走的距离 = （内容的长度 - 盒子的长度）/ (盒子的长度 - 滚动条的长度) * 滚动条走的距离
