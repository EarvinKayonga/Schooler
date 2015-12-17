var http = require('http');

module.exports = function (website, callback){

    http.get(website, function(response){
	var str = '';
	response.on("data", function(res){
	    str += (res.toString());
	});
	response.on("end", function(){
	    console.log(str);
	});
    }).on('close', function(){
	return callback();
    });
};
