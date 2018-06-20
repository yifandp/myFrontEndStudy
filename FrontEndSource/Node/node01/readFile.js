let fs = require('fs');

/*
fs.readFile('test2.txt',(err,data) => {
    if(!err){
        console.log(data.toString());
    }else{
        console.log(err);
    }
})
*/

fs.readFile('/Users/amo/Pictures/com.tencent.ScreenCaptureEIM/Mate_9_05.jpg',(err,data) => {
    if(!err){
        fs.writeFile('img3.jpg',data, (err) => {
            if(!err){
                console.log('写入成功！');
            }
        })
    }
})
