let fs = require('fs');
// 打开文件
fs.open('test1.txt','w',(err, fd) => {
    // 判断是否出错
    if(!err){
        // 写入数据
        fs.writeFile(fd,'Node.js异步操作文件',(err) => {
            if(!err){
                // 关闭并保存文件
                fs.close(fd,(err) => {
                    if(!err){
                        console.log('文件保存成功')
                    }
                });
            }else{
                throw  err;
            }
        })
    }else{
        throw err;
    }
})