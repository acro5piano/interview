// Google: https://www.careercup.com/question?id=5433766164561920
// Given an integer array. Find out the equal sum partition with the smallest sum.
// For example: a = [1, 3, 2, 2, 1, 3]. There are three equal sum partitions: [(1, 3), (2, 2), (1, 3)], [(1, 3, 2), (2, 1, 3)] and [(1, 3, 2, 2, 1, 3)]. First one has the smallest equal sum, so return 4
// Notice you cannot reorder the input array.
//
// Considered Questions
// - Just to be clear, can I confirm some examples about the pair?
//   - [1, 3, 2, 3] => [(3, 2), (2, 3)], (1, 3, 2, 3)] => 5
//     No. only (1, 3, 2, 3)
//   - [1, 3, 2, 4] => [(1, 3, 2, 4)] => 10
// - I only can create pair from an element next to its elements? For example,
//   - pairs of [1, 3, 2] not includes (1, 2)
// - What should be returned If given an empty array? Zero? throw an Error?
//   - return Zero (in this traiing)
// - Is this pair invalid? each partition does not include duplicated element, right?
//   - [1, 3, 2, 2, 1, 3] => [(3, 2, 2, 1), (2, 2, 1, 3)]
// - How about if element length is odd?
//   - [1, 3, 2] => [(1, 3)]
//   - [1, 3, 2, 3, 1] => [(1, 3), (3, 1)] includes?
//     -> No for this traiing session

const sum = (array: number[]) => array.reduce((x, y) => x + y)

/*
 * divide given array into partitions.
 *
 * e.g.)  divideArray([1, 3, 2, 3]) => [[1, 3, 2, 3]]
 * divideArray([1, 3, 2, 2, 1, 3]) =>
 *   [[1, 3], (2, 2), (1, 3)], (1, 3, 2), (2, 1, 3)] [1, 3, 2, 2, 1, 3]]
 */
function divideArray(originalArray: number[]): number[][] {
  function divideArrayInner(array: number[], acc: number[][] = [], divideTo = 2): number[][] {
    if (divideTo > originalArray.length / 2) {
      return [...acc, originalArray]
    }
    if (originalArray.length % divideTo !== 0) {
      return divideArrayInner(originalArray, acc, divideTo + 1)
    }
    if (array.length === 0) {
      const position = originalArray.length / divideTo
      const isUnique = (array: number[]) => new Set<number>(array).size === 1
      const isValidPair = isUnique(acc.slice(-position).map(sum))
      if (isValidPair) {
        return divideArrayInner(originalArray, acc, divideTo + 1)
      }
      return divideArrayInner(originalArray, acc.slice(0, -position), divideTo + 1)
    }

    return divideArrayInner(array.slice(divideTo), [...acc, array.slice(0, divideTo)], divideTo)
  }

  return divideArrayInner(originalArray)
}

/*
 * returns equal sum partition with the smallest sum.
 *
 * e.g.) findEqualSumPartition([1, 3, 2, 2, 1, 3]) = 4
 */
function findEqualSumPartition(array: number[]): number {
  return Math.min(...divideArray(array).map(sum))
}

const testing = [
  [1, 3, 2, 2, 1, 3],
  [1, 3, 2, 3],
  [2, 3, 4, 1, 2, 3],
  [1, 3, 2, 2, 1, 3],
  [1, 3, 2, 1, 3],
  [],
]

console.log(testing.map(findEqualSumPartition))
