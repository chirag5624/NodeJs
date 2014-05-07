var http=require("http");
var express=require("express");
//var qs=require("qs");
var host="127.0.0.1";
/*
var server=http.createServer(function(req,res){
var body="";
if(req.method=='POST')
	{
		req.on('data',function(chunk){
			body+=chunk;
		});
	req.on('end',function () {
		var 	name=qs.parse(body).usr;
		console.log("Your name is "+name);
				});	
	
		}
console.log("Hello Chirag!!");
res.writeHead(200,{"Content-type":"text/plain"});
res.end("Hello World!!");
});

server.listen(8080,host,function(){
	console.log("Listening");
});

*/