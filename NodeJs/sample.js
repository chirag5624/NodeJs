var express=require("express");
var app=express();
app.use(express.json());
app.use(express.urlencoded());
app.post('/',function(req,res){
	if(req.method=='POST'){
		console.log("Your name is "+req.body.usr);
				}
	res.send(404,"Hello User");
	
	
	
});
console.log("Listening on port 8080");
app.listen(8080,"127.0.0.1");