var http = require('http'),
    fs = require('fs'),
    port = process.argv[2] || 8000;

http.createServer(function(req, res){
    var src = fs.createReadStream(process.argv[3]);
    src.on('open', function(){
	src.pipe(res);
    });
    src.on('error', function(err){
	console.log(err);
    });
    src.on('end', function(){
	res.end();
    });
}).listen(port);
