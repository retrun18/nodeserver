var http=require('http');
http.createServer(function(req,res)
{
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('Hello World\n')
}).listen(8080,'127.0.0.1')
console.log('服务运行在 http://127.0.0.1:8080/')