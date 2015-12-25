'use strict';
var sum = 0;
process.argv.forEach(function(i){
    if(i = parseInt(i, 10))
	sum += i;
});

console.log(sum + 0);
