// var, let, const

// var:
var name = 'imed'

console.log(name)

function sayHello () {
  let lastName = 'jaberi'
  name = 'esni'
  console.log('inside the function', lastName)
}

sayHello()

console.log(name)
console.log('outside the function', lastName)
