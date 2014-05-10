var fs=require('fs');
/*
var Notification=require('node-notifier');
var node=new Notification();
node.notify({

	message:'hello World'
	image:fs.readFileSync('test.png');
});

*/	

var growl = require('growl');
//growl('You have mail!');
//growl('how are you friend?', { title: 'hello chirag'})
growl('Hello You!!', { title:'Facebook',image: 'http://clubpenguin.wikia.com/wiki/File:1433_icon.png' });
