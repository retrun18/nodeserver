var pathRoot="/home/appleli/GitHub";
var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res)
{
	var url=req.url;
	var type=/\.\w+$/.exec(req.url)[0].replace('.','')
	//客户端输入的URL，例如‘localhost/index.html’
	//那么这里的URL就为/index.html
	var filePath=pathRoot+url;
	console.log(filePath);
	fs.readFile(filePath,function(err,data){
		if(err){
			console.log(err.message);
			res.writeHeader(404,{'content-type':'text/html;charser="utf-8"'});
			res.write('<h1>404 not found page</h1>');
			res.end();
		}else{
			res.writeHeader(200,{'content-type':'text/'+type+';charset="utf-8"'});
			res.write(data);
			res.end();
		}
	})
}).listen(8080);
console.log('服务器开启成功！端口：8080');