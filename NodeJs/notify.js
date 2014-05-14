var https=require('https');
var fs=require('fs');
var growl=require('growl');
var array=['','','','','','','','','','','','','','','','','','',''];
var index=-1;
var options={
		key: fs.readFileSync('ryans-key.pem'),
		cert:fs.readFileSync('ryans-cert.pem')
					};	
var array=[];
var option={
	host:'graph.facebook.com',
	path: '/me/notifications?access_token=CAACEdEose0cBAFZBw0vT8R8DH873WUTk9csY4oOpxbjMILAuerDU4NZBzLvIPlICmZAGVquiroFSsZBMhHcrwRrZCb8YSf2PZAWCihUdUVQed7ETM1LGXnOuxsxDCxClh33lYrssZCx1uq3ZBsRwZCRoH8CpEDZCfFMDhAGYxhG3xNdFHZBrLZAqJxBBjtlq7MKv5cEIhss2zSvGtwZDZD&fields=title,from,to&include_read=true'
				};
var i=0;
https.get(option,function(res){
		
	var body='';
		res.on('data',function(chunk){
		body+=chunk;	});	
	
		res.on('end',function(){
		var data2=(JSON.parse(body)).data;	
			for(var obj2 in data2){
					var obj3=data2[obj2];
									
						var pic={
									host:'graph.facebook.com',
									path: '/'+obj3.from.id+'?fields=picture'
											};
											
								//console.log(i+' pic initialised');
			
			https.get(pic,function(res2){
			//console.log('Initial pic request: '+res2.statusCode);	
			
		
		var bodyy='';
		res2.on('data',function(chunk){
					bodyy+=chunk;
							});	
			
		res2.on('end',function(){
				var obj4=JSON.parse(bodyy);	
				var url=obj4.picture.data.url;


				https.get(url,function(res3){
					index++;
				//console.log('3\n');
				res3.setEncoding('binary');
        		//array[index]='';
        	
        		res3.on('data', function(chunk2){
            array[index]+= chunk2; 
        			});
        		res3.on('end', function(){
        			console.log(i+' '+data2[i].from.name);
            	fs.writeFileSync(data2[i].from.name+'00'+i,array[i], 'binary');
							//growl(data2[i].title,{title: data2[i].from.name, image: __dirname+'/'+data2[i].from.id+'p'+i});
								           	
            	i++;
            	
												
													});

   						}).on('error',function (e) {console.log('Error in request three: '+e.message+'\n');});
							
											
										});
		}).on('error',function (e) {console.log('Error in request two: '+e.message)});

	}

});


}).on('error',function(e){console.log(e);});















console.log('Listening on port 8080');
