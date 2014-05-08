var https=require('https');
var prettyjson=require('prettyjson');
var color=require('./prettyjson/node_modules/colors');
var fs=require('fs');
//var access_token='';
var options={
	host:'graph.facebook.com',
	path:'/me?access_token=CAACEdEose0cBABjsfUSQiE4foIttiFLbfL121BXhc3webAKd4qkd0nF5zt1mF0ZAzsjgNeOTOq4JrXwh4CCzxxddRdZC90lKwHRzh9SaSW6ODUgiA1SFrO2V2D2l0a0YlUYRA5uGSn9AbheUXZAXsjIA39YsmsLZC8PVl4e12cXU0sCw2otYdhNRaO2kmTT9JDMrPhz1JAZDZD'	
		};
		
var option={
		key: fs.readFileSync('ryans-key.pem'),
		cert:fs.readFileSync('ryans-cert.pem')


		};		
		
	/*
		
https.createServer(options,function(req,res){
	console.log("Server received a request "+req.url);
	//res.writeHead(200);	
	res.end('Hello User!! Did the program run?');




}).listen(8080);
*/

https.get(options,function(res){
	var body='';
	res.on('data',function(chunk){
	body+=chunk;
	});	
	
	res.on('end',function(){
	var obj=JSON.parse(body);	
	console.log(obj['name'] );
	for(var attr in obj){console.log(attr+": "+obj[attr]+"\n");}	
	
	
	});
	
	
}).on('error',function(e){console.log("Error is: "+e)});

console.log("Server running on port 8080");	