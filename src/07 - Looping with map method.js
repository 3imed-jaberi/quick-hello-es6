// looping with map method

// default data
const fruits = [
  'Apple 🍎',
  'Pear 🍐',
  'Banana 🍌',
  'Grape 🍇',
  'Strawberries 🍓',
  'Potato 🥔',
  'Avocado 🥑'
]

// // for way
// let newArray = []
// for (let index = 0; index < fruits.length; index++) {
//   const element = index + ' - ' + fruits[index]
//   newArray.push(element)
// }

// console.log(newArray)

// map way
const tab = fruits.map((fruit, index) => `${index} - ${fruit}`)

console.log(tab)
