// Modules

const names = require('./4-names')
const sayHi = require('./5-utils')
const alternativeSyntax = require('./6-alternative-syntax')

//code runs even if you don't assign to variables. when you import module you invoke it
require('./7-mind-grenade')

console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)