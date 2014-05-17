var http=require('http');
var express=require("express");
var socket=require('socket.io');
var app=express();
var fs=require('fs');
app.use(express.json());
app.use(express.urlencoded());
var server=http.createServer(app);
app.get('/',function(req,res){

console.log('URL:'+req.url);
res.send('Welcome User!!');
});

app.post('/',function(req,res){
var data='';
req.on('data',function(chunk){data+=chunk;});
req.on('end',function(){

console.log(data);
res.end('Data Received!!');
		});
});

app.get('/socket.html',function(req,res){
fs.readFile(__dirname+'/socket.html',function(error,data){

res.writeHead(200,{'Content-type':'text/html'});
res.end(data,'UTF-8');
	});
});

	
	

console.log("Listening on port 8080");
server.listen(8080,'127.0.0.1');
socket.listen(server);