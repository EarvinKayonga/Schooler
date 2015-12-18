'use strict';
var fs = require('fs');
if (process.argv && process.argv.length > 2){
    fs.readFile(process.argv[2], function(err, data){
	if (!err && data){
	    var res = data.toString().split('\n').length;
	    console.log(res - 1);
	}
    });
}
