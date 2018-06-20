// 引入mongoose模块
let mongoose = require('mongoose');

let DB_URL = 'mongodb://localhost/it666';
mongoose.connect(DB_URL);

let db = mongoose.connection;
// 监听数据库的状态
db.on('error', () => {
    console.log('连接失败');
});

db.once('open', () => {
    console.log('连接成功');
})

db.once('close', () => {
    console.log('数据库已断开');
})
