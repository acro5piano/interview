// hash map pattern, o(n)
export const getPairFromNumberArray = (array: number[]): number[] | null => {
  const getPairFromNumberArrayRecursion = (
    [testing, ...rest]: number[],
    passed: Set<number> = new Set(),
  ): number[] | null => {
    if (passed.has(10 - testing)) {
      return [testing, 10 - testing]
    }
    if (rest.length === 0) {
      return null
    }
    return getPairFromNumberArrayRecursion(rest, passed.add(testing))
  }

  return getPairFromNumberArrayRecursion(array)
}

// for pattern, o(n^2)
// export const getPairFromNumberArrayUsingFor = (array: number[]): number[] | null => {
//   for (const [i, element1] of array.entries()) {
//     for (const element2 of array.slice(i + 1)) {
//       if (element1 + element2 === 10) {
//         return [element1, element2]
//       }
//     }
//   }
//
//   return null
// }
