if (process.argv.length < 4)
    return;
var getData = require('./jugglingasyncmod.js');
getData(process.argv[2], function(){
    return getData(process.argv[3], function(res){
	console.log(res);
	return getData(process.argv[4], function(r){
	    console.log(r);
	});
    });
});
