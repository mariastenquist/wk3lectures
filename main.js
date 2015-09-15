// var echo = function(input){
// 	return input
// }

// console.log(typeof echo)

// var add = function(a,b,c){
// 	return a + b + c
// }


var add = function(a,b,c){

	a = a || 5
	b = b || 10
	c = c || 15

	return a + b + c
}

console.log(add(5,10,0))


// below, args is ONE object, with potentially MANY properties

var config = function(args){
	args.people = args.people || [{name : 'Alice'}, {name : 'Bob'}]
	return args

}

// config.log(config({
// 	people: [] //an empty array is still truthy. it won't be replaced by the default value. 
// }))

// config.log(config({})) // args.people is undefined (not defined at all). It will get replaced with the default.

// angular.module('app', [])
// angular.module('app')

// //overloaded function-- it can perform different behaviors with different inputs (function below:). Also known as polymorphism

// angular.module = function(moduleName, dependencies){
// 	if (dependencies === undefined){
// 		getModule('app')
// 	}else{
// 	setModule(moduleName, dependencies)
// 	}	
// }


1 + 1 //2 - addition (overloaded operation)
'1' + '1' //'11' - concatenation


var log = function(){
	// console.log(arguments)
	// console.log(typeof arguments)
	// console.log(arguments[0]) //first argument
	// console.log(arguments[1]) //second argument
	// console.log(arguments.length)
	for (var i =0; i <arguments.length; i++){
		console.log(arguments[i])
	}
	console.log(arguments)
}

log('this', 'is', 'a', 'lot', 'of', 'arguments')

// console.log(log('hello', 'world'))


// var now = function(){
// 	console.log('NOW!')
// }
// //now() nowhere in the code is the function actually called.

// console.log('wait for it...')
// setTimeout(now, 2000)

// var intervalID = setInterval(now, 500)

// setTimeout(function(){
// 	clearInterval(intervalID)

// }, 4000)


var names = [
	Bob
	Alice
	hansel
	ed
]

names.sort(function(argA, argB){
	if (a.name > b.name){
		//if a sort function returns a postive number, then argA should be sorted before argB
		return 1
	}
	else if (argA.name < argB.name){
		return -1
	}
	else if (argA.name === argB.name){
		return 0
	}
})
console.log(names)


names.sort(function(argA, argB)){
	var BinA = 0
	var BinB = 0

}


setTimeout(function(){
	var foo = 'first'

	setTimeout(function(){
	var foo = 'second'
		setTimeout(function(){
		var foo = 'third'
		}, 0)
	},0)
},0)
//variable hiding: look in the local function first, then you'll hide the global/higher variable.

