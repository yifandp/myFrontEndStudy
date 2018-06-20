let mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost/m_data');

mongoose.connection.once('open', () => {
    console.log('连接成功');
})

// 2.创造模式对象
let Schema = mongoose.Schema;
let personSchema = new Schema({
    name: String,
    age: Number,
    sex:{
        type: String,
        default: '男'
    },
    chat: String
})

// 3.创建Model对象
let personModel = mongoose.model('person',personSchema);

// 4.插入文档
personModel.create({
    name: 'Tom',
    age: 20,
    chat: 'friend Jery'
},(err) => {
    if(!err){
        console.log('数据插入成功！')
    }else{
        throw err;
    }
})

personModel.create({
    name: 'kare',
    age: '27',
    sex: '女',
    chat: 'is a machine'
}, (err) => {
    if(!err){
        console.log('数据插入成功！')
    }else{
        throw err;
    }
})