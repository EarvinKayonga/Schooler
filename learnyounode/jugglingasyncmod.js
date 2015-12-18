var http = require('http'),
    async = require('async');

module.exports = function (websites, callback){
    async.parallel([
	function(){ ... },
	function(){ ... }
    ], callback);
};
