const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    const valueToBeInserted = array[i]
    let j = i
    for (; j > 0; j--) {
      if (array[j - 1] > valueToBeInserted) {
        array[j] = array[j - 1]
      } else {
        break
      }
    }
    array[j] = valueToBeInserted
    console.log(array)
  }
  return array
}

const sort = insertionSort

const testing = [[4, 1, 3, 5, 2]]

testing.forEach(t => console.log(sort(t)))
