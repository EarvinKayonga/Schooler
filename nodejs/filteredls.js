'use strict';
var fs = require('fs');

if (process.argv && process.argv.length > 2){
    fs.readdir(process.argv[2], function(err, files){
	if (process.argv[3]){
	    files =  files.filter(function(element){
		return element.indexOf(process.argv[3]) > 0;
	    });
	}
	files.forEach(function(f){
	    console.log(f);
	});
    });
}
