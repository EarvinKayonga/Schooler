'use strict';
var modularls  = require('./module.js');
if (process.argv && process.argv.length > 2)
    modularls(process.argv[2], process.argv[3], function(err, files){
	if (files)
	    files.forEach(function(file){
		console.log(file);
	    });
    });
