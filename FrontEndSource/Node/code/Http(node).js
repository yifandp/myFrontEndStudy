let http = require('http');
let fs = require('fs');

// 创建服务器
let server = http.createServer((req,res) => {
    if(req.url === '/test1.html'){
        fs.readFile('./test1.html',(err,data) => {
           if(!err){
               res.writeHead('200',{'Content-Type':'text/html; charset=utf-8'});
               res.write(data);
               res.end();
           }else{
               throw  err;
           }
        });
    }else if(req.url === '/test2.html'){
        fs.readFile('./test2.html',(err,data) => {
            if(!err){
                res.writeHead('200',{'Content-Type':'text/html; charset=utf-8'});
                res.write(data);
                res.end();
            }
        });
    }else if(req.url === '/'){
        res.writeHead('200',{'Content-Type':'text/html; charset=utf-8'});
        res.write(
            '<h1>FrontEnd!</h1>'
        );
        res.end();
    }else {
        res.writeHead('404',{'Content-Type':'text/html; charset=utf-8'});
        res.write(
            '访问的页面不存在！'
        );
        res.end();
    }
})
server.listen('8080','127.0.0.1');