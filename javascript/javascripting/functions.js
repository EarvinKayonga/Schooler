function eat(food)
{
    if (typeof(food) === 'string')
	return food + ' tasted really good.';
}

console.log(eat('bananas'));
