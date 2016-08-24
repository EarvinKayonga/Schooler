function* bears () {
	var kind = yield 'grozzly';
	yield kind + ' polar';
	return 'done';
}

var bear = bears()
console.log(bear.next());
console.log(bear.next('black'));
console.log(bear.next());
