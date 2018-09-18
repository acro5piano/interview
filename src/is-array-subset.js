const isArraySubset = (array, items) => {
  const isSubset = ([x, ...xs], testing) => {
    if (x === undefined) {
      return true
    }
    const index = testing.indexOf(x)
    if (index === -1) {
      return false
    }
    delete testing[index]
    return isSubset(xs, testing)
  }

  return isSubset(items, array.slice())
}

const testing = [
  [[1, 2, 3], [1, 3]],
  [[1, 3, 2], [1, 2]],
  [[0, 2, 3], [1, 2]],
  [[3, 2, 3], [1, 2]],
  [[1, 3, 1, 2, 3], [1, 2, 1, 2]],
  [[-1, 0, 1, 2, -1, -4], [-4, 2, 2]],
  [[3, 2, 3], [0, 0, 0]],
]

testing.map(t => isArraySubset(...t)).forEach(console.log)

// const isArraySubset = (array, items) => {
//   let testing = array.slice()
//   const isNotSubset = items.some(item => {
//     const index = testing.indexOf(item)
//     delete testing[index]
//     return index === -1
//   })
//
//   return !isNotSubset
// }
