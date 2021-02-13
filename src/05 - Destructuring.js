// destructuring

// object
// const func = (object) => {
//   const { firstName, lastName, gendre } = object
//   console.log(firstName, lastName, gendre)
// }

// func({ firstName: 'imed', lastName: 'jaberi', gendre: 'male' })

// array
// const func = (array) => {
//   const [firstEl, secondEl, thirdEl, nthEL] = array
//   console.log(firstEl, secondEl, thirdEl, nthEL)
// }

// func([100, 5, 105])

// nested
const func = (object) => {
  const {
    // nested object
    content: { title },
    techs: [html],
    nestedTechs
  } = object

  const [obj] = nestedTechs
  const { title: nestedTechsTitle } = obj

  console.log(nestedTechsTitle)
}

func({
  branch: 'fron-end',
  techs: ['html', 'css', 'js', 'react.js', 'koa.js'],
  nestedTechs: [{ title: 'Hello World !!' }],
  advanced: true,
  years: 2020,
  content: {
    title: 'Hello World'
  }
})
