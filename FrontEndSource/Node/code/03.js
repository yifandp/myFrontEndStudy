let mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost/m_data');

mongoose.connection.once('open',() => {
    console.log('数据库连接成功');
})

// 创造模式对象
let Schema = mongoose.Schema;
let personSchema = new Schema({
    name: String,
    age: Number,
    sex: {
        type: String,
        default: '男'
    },
    chat: String
})

// 创建Model 对象
let personModel = mongoose.model('person',personSchema);

// 通过文档的方式插入数据
let person = new personModel({
    name:'hake',
    age: 45,
    chat: 'is a police'
});

person.save((err, prodouct) => {
    if(!err){
        console.log(prodouct);
    }else{
        throw err;
    }
})


/*
personModel.create([
    {name: 'Bob', age: 25, chat: 'happy a good day!'},
    {name: 'Alex', age: 14, sex: '女', chat: 'diffent every day'},
    {name: 'maks', age: 25, chat: 'is king machine'},
    {name: 'rous', age: 35, sex: '女'}
])
*/

// 增删改查

/*
personModel.find({},(err,docs) => {

    if(!err){
        console.log(docs);
    }
})
*/

/*
* personModel.find({},{name: 1, _id: 0}, (err,docs) => {
    if(!err){
        console.log(docs);
    }else{
        throw err
    }
})
* */

// personModel.find({},'name _id __v',{skip: 0, limit: 6}, (err,docs) => {
//     if(!err){
//         console.log(docs);
//     }else{
//         throw err
//     }
// })