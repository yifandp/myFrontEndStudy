let fun = require('./myFunc');
let global = require('http');

let a = 10;
let b = 50;

console.log(fun.sum(a, b));
console.log(fun.avg(a, b));

console.log(arguments.callee + '');  

/** 
 * 在执行模块代码之前，Node.js 会使用一个如下的函数包装器将其包装：

    function (exports, require, module, __filename, __dirname) {
        //模块的代码实际上在这里
    }

    exports 用于暴露函数内部的属性方法
    require  引入模块
    module 代表当模块
 * 
 */