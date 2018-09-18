const binarySearch = (heystack, needle) => {
  heystack.sort((a, b) => a - b)

  const _binarySearch = binaryArray => {
    const bin = Math.floor(binaryArray.length / 2)
    const searched = binaryArray[bin]
    if (searched === needle) {
      return true
    }
    if (binaryArray.length === 1) {
      return false
    }
    return _binarySearch(binaryArray.slice(bin))
  }

  return _binarySearch(heystack)
}

const testing = [28, 17, 13, 12, 5, 11, 3, 1, 25, 22]
console.log(binarySearch(testing, 25))
console.log(binarySearch(testing, 4))
