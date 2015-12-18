'use strict';
if (!process.argv || process.argv.length < 2)
    return;
var http = require('http'),
    str = '';
if (process.argv && process.argv.length > 2){
    http.get(process.argv[2], function(response){
	response.on("data", function(res){
	    str += (res.toString());
	});
	response.on("end", function(){
	    console.log(str.length);
	    console.log(str);
	});
    });
}
