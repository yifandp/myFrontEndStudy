let fs = require('fs');
// 打开文件
let fTest = fs.openSync('test.txt','w');

// 写入数据
fs.writeFileSync(fTest,'学习Node.js 的文件操作');

// 保存并退出
fs.closeSync(fTest);