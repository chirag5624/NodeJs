var http    = require('http');
var fs  = require('fs');
var url2     = require('url');



var getImg = function(o, cb){
    
    var url= url2.parse(o.url);
	//	console.log(JSON.parse(JSON.stringify(o)).dest+'\n');
		//console.log(JSON.parse(JSON.stringify(o)).dest+'\n');
		console.log(url.pathname+'\n');
    var options = {
      host: url.hostname,
      path: url.pathname
    };

    http.get(options, function(res) {
        console.log("Got response: " + res.statusCode);
        res.setEncoding('binary')
        var imagedata = ''
        res.on('data', function(chunk){
            imagedata+= chunk; 
        });
        res.on('end', function(){
            fs.writeFileSync(o.dest, imagedata, 'binary', cb);
       




 
       });
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
};

 
 getImg({
        url: "http://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/t1.0-1/c13.12.155.155/s50x50/1044025_660023994012312_954199447_a.jpg",
        dest: __dirname + '/fb.jpg'
    },function(err){
        console.log('image saved!')
    });