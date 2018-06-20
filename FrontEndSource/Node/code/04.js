let http = require('http');
let url = require('url');

let server = http.createServer((req,res) => {
    let myUrl = url.parse(req.url,true);
    console.log(myUrl);
    res.end('ok!');
    // console.log(myUrl.query.username);
    // console.log(myUrl.query.age);
    // console.log(myUrl.query.sex);
})

server.listen('8080','127.0.0.1');