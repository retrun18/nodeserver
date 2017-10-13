var http=require('http');
http.createServer(function(req,res)
{
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('Hello World\n')
}).listen(8080,'47.94.207.29')
console.log('服务运行在 http://47.94.207.29:8080/')