let fs = require('fs');

// 创建写入流
let ws = fs.createWriteStream('test2.txt');

// 打开通道
ws.once('open',() => {
    console.log('通道打开');
});

// 关闭通道
ws.once('close',() => {
    console.log('通道关闭');
})

// 写入内容
ws.write('步骤一');
ws.write('步骤二');
ws.write('步骤三');
ws.write('步骤四');
ws.write('步骤五');
ws.write('步骤六');

ws.end();