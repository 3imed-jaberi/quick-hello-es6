// oop --> class

// old style
// function Person () {
//   this.name = 'formalab'
// }

// Person.prototype.getName = function () {
//   return this.name
// }

// var p = new Person()

// console.log(p.getName())

// new style
const anyAtt = Symbol['@@xxxprivate-att']
const anyAtt2 = Symbol['@@xcfsdqklhdslkvgdhsbensg']

class Person {
  constructor () {
    this.name = 'formalab'
    this[anyAtt] = 'any'
  }

  // getName() {
  //   return this.name
  // }

  get getName () {
    return this.name
  }

  // setName (name) {
  //   this.name = name
  // }

  set setName (name) {
    this.name = name
  }

  static getVal () {
    return 100
  }
}

console.log(Person.getVal())

const p = new Person()
p.setName = 'ensi'
console.log(p.getName)
