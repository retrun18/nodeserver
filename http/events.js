var EventEmitter=require('events').EventEmitter
var life=new EventEmitter()
life.setMaxListeners(20)
//addEventListener
life.on('求安慰',function(who){
	console.log('给 '+who+' 倒水')
})
life.on('求安慰',function(who){
	console.log('给 '+who+' 揉肩')
})
life.on('求安慰',function(who){
	console.log('给 '+who+' 做饭')
})
life.on('求安慰',function(who){
	console.log('给 '+who+' 洗衣服')
})
life.on('求安慰',function(who){
	console.log('给 '+who+' 吹剪')
})
life.on('求安慰',function(who){
	console.log('给 '+who+' 吹剪')
})
life.on('求安慰',function(who){
	console.log('给 '+who+' 吹剪')
})
life.on('求安慰',function(who){
	console.log('给 '+who+' 吹剪')
})
life.on('求安慰',function(who){
	console.log('给 '+who+' 吹剪')
})
life.on('求安慰',function(who){
	console.log('给 '+who+' 吹剪')
})
life.on('求安慰',function(who){
	console.log('给 '+who+' 吹剪')
})
life.on('求安慰',function(who){
	console.log('给 '+who+' 吹剪')
})
life.on('求安慰',function(who){
	console.log('给 '+who+' 你想累死我啊')
})
life.emit('求安慰','汉子')