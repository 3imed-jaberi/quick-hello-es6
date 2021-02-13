// arrow functions

function sayHelloWorld () {
  console.log('Hello World !')
}

const sayHelloWorld2 = function () {
  console.log('Hello World 2!')
}

const sayHelloWorld3 = () => {
  console.log('Hello World 3!')
}

// default function args

const sayHello = (param = 'World ********* ') => {
  console.log('Hello ' + param + ' !')
}

sayHello()
