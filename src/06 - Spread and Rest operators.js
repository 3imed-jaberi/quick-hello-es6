// spread and rest operators

const func = (array) => {
  // rest op
  const [firstEl, ...restEls] = array
  console.log(typeof firstEl, typeof restEls, Array.isArray(restEls))
  console.log(firstEl, restEls)

  // spread op
  const tab = [-50, 30, 7, 9000, ...restEls]
  console.log(tab)
}

func([100, 5, 105])
