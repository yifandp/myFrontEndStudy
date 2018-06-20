let fs = require('fs');

// 创建读入流
let rs = fs.createReadStream('/Users/amo/Downloads/店铺模板/电器/电器-移动.psd');
// 创建写出流
let ws = fs.createWriteStream('01.psd');

// 打开读入通道
rs.once('open',() => {
    console.log('读入通道打开');
})
// 关闭读入通道
rs.once('close',() => {
    console.log('读入通道关闭');
})

// 打开写出通道
ws.once('open',() => {
    console.log('写出通道打开');
})
// 关闭写出通道
ws.once('close',() => {
    console.log('写出通道关闭');
})

rs.on('data',(data)=>{
    ws.write(data);
})

/*
* 方法二 此方法是方法一的封装
* rs.pipe(ws);
* */