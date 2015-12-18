'use strict';
var http = require('http');
if (process.argv && process.argv.length > 2){
    http.get(process.argv[2], function(response){
	response.on("data", function(res){
	    console.log(res.toString());
	});
    });
}
