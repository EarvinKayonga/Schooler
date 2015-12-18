var net = require('net'),
    server = net.createServer(function(socket){
	var date = new Date(),
	    data = "";
	data = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" +date.getMinutes() + "\n";
	socket.end(data);
    }),
    port = process.argv[2] || 8000;
server.listen(port);
