// promise
const fetch = () => {
  return new Promise((resolve, reject) => {
    // traitment ...
    const ok = false
    if (ok) {
      resolve({
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
      }) // success
    } else {
      reject(new Error('something bad ...')) // failed
    }
  })
}

// fetch()
//   .then((response) => response)
//   .then((json) => { console.log(json) })
//   .catch((error) => { throw error })

// async/await
const fetcher = async () => {
  try {
    // const response = await (await fetch()).json()
    // const json = await response.json()
    const response = await fetch()

    console.log('fetcher async/await', response)
  } catch (error) {
    throw error
  }
}

fetcher()
