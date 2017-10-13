var http=require('http');
http.createServer(function(req,res)
{
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('Hello World\n')
}).listen(8080,'localhost')
console.log('服务运行在 http://localhost:8080/')