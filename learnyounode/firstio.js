var fs = require('fs');
if (process.argv.length > 2){
    var buf = fs.readFileSync(process.argv[2]),
	res = buf.toString().split('\n').length;
    console.log(res - 1);
}
