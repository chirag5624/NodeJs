var https=require('https');
var fs=require('fs');
var Note=require('node-notifier');
var notifier=new Note();

var options={
		key: fs.readFileSync('ryans-key.pem'),
		cert:fs.readFileSync('ryans-cert.pem')


		};	
/*
		notifier.notify({	
		
			
			title:'Hello Vicky!!',
		//	message: 'Hello Chirag.',		
			message:'chirag',
			//message:'parth'
		
				
		
		
			});
			
			notifier.notify({	
		
			
			title:'Hello Vicky!!',
	//		message: 'Hello Chirag.',		
//			message:'chirag',
			message:'parth'
		
				
		
		
			});	
//},15000);

*/

var option={
	host:'graph.facebook.com',
	path: '/me/notifications?access_token=CAACEdEose0cBAIP9BQAm1TVMOQ5RMrQTxLqNJIsk3mq1qWkevu5IpW2j5IhZBDoOrPYeMLJgaiZAtOPV5Fx6edSWZAw47SNAHZCZBUZBZBYAJcRb19vNG11BUSsP6tLyuIEgLhjb6Bs8vtsBuEPS5sePOy8WwyHG7RZBBSTk7GYjR1bhxXcIuSASp5JDz01YFGqQyAZC3qiHZBBgZDZD&fields=title'


};

https.get(option,function(res){
		
var body='';
	res.on('data',function(chunk){
	body+=chunk;
	});	
	
	res.on('end',function(){
	var obj=JSON.parse(body);	
	var data=obj.data	;
	//console.log(data);

	for(var obj2 in data){
		var obj3=data[obj2];
		
	
//		for(var attr in obj3){
			//	console.log("'"+attr+"' : '"+obj3[attr]+"'");
				
					notifier.notify({	
		
			
			//title:attr,
			title: 'Hello Chirag.',		
			message:obj3.title
			//message:'parth'
		
				
		
		
			});	
					
			
			
			
			
			
			
							
							
				console.log('\n');
		}

});






}).on('error',function(e){console.log(e)});


console.log('Listening on port 8080');
