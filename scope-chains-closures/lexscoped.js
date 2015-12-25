function foo()
{
    var bar;
    quux = 'fefe';
    function zip()
    {
	var quux = 'value';
	bar = true;
    }
    return zip;
}
