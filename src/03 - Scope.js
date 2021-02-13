// scope
console.log(this)

const sayHelloWorld2 = function () {
  console.log('Hello World2 !')
  console.log('this of sayHelloWorld2', this)

  const sayHelloWorld = () => {
    console.log('Hello World !')
    console.log('this of sayHelloWorld', this)
  }

  sayHelloWorld()
}

sayHelloWorld2()
