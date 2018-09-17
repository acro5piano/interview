// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note:
//
// The solution set must not contain duplicate triplets.
//
// Example:
//
// Given array nums = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSumOrderN3 = nums => {
  const results = []
  nums.forEach((i, index) => {
    nums.slice(index + 1).forEach((ii, index2) => {
      nums.slice(index + index2 + 2).forEach((iii, index3) => {
        if (i + ii + iii === 0) {
          const candidate = [i, ii, iii].sort()
          const notUnique = results.some(
            result =>
              result[0] === candidate[0] &&
              result[1] === candidate[1] &&
              result[2] === candidate[2],
          )
          if (!notUnique) {
            results.push(candidate)
          }
        }
      })
    })
  })
  return results
}

const threeSum = nums => {
  const isArraySubset = (array, items) => {
    let testing = array.slice()
    const isNotSubset = items.some(item => {
      const index = testing.indexOf(item)
      delete testing[index]
      return index === -1
    })

    return !isNotSubset
  }

  const results = []
  const passed = []
  for (const value of nums) {
    passed.push(value)
    if (passed.length < 3) {
      continue
    }

    for (const passedValue of passed) {
      const candidate = -(value + passedValue)
      if (passed.includes(candidate)) {
        const pair = [value, passedValue, -(value + passedValue)].sort()
        const notUnique = results.some(
          result => result[0] === pair[0] && result[1] === pair[1] && result[2] === pair[2],
        )
        if (!notUnique && isArraySubset(nums, pair)) {
          results.push(pair)
        }
      }
    }
  }
  return results
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-1, 0, 2, 2, -1, -4]))
