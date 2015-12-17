'use strict';
var fs = require('fs');

module.exports = function(path, ext, callback){
    if (!callback)
	return;
    fs.readdir(path, function(err, files){
	if (err)
	    return callback(err);
	if (ext){
	    files =  files.filter(function(element){
		return element.indexOf(ext) > 0;
	    });
	}
	return callback(null, files);
    });
};
