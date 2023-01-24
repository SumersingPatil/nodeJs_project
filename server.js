const http=require('http');

http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{
        'Content-Types' : 'text/plain'
    });
    res.end('Hello Node JS')
}).listen(3002);