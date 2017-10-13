var globalVariable='This is global variable'
function globalFucntion()
{
	var localVariable='This is local variable'
	console.log(globalVariable)
	console.log(localVariable);
	globalVariable='This is Changed variable'
	function localFunction()
	{
		var innerLocalVariable='This is inner local variable'
		console.log('visit innerlocal')
		console.log(globalVariable)
		console.log(localVariable)
		console.log(innerLocalVariable)
	}localFunction()
}
globalFucntion();