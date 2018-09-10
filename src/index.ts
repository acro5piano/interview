console.log('hello')

export const A = 'a'

// hash map pattern, o(n)
export const getPairFromNumberArray = (array: number[]): number[] | null => {
  const res = array.reduce((car: Set<number> | number[], cur: number) => {
    if (car instanceof Array) {
      return car
    }

    if (car.has(10 - cur)) {
      return [cur, 10 - cur]
    }

    return car.add(cur)
  }, new Set<number>())
  if (res instanceof Array) {
    return res
  }
  return null

  // const set = new Set<number>()
  //
  // for (const element of array) {
  //   if (set.has(10 - element)) {
  //     return [element, 10 - element]
  //   } else {
  //     set.add(element)
  //   }
  // }
  //
  // return null
}

// for pattern, o(n^2)
export const getPairFromNumberArrayUsingFor = (array: number[]): number[] | null => {
  for (const [i, element1] of array.entries()) {
    for (const element2 of array.slice(i + 1)) {
      if (element1 + element2 === 10) {
        return [element1, element2]
      }
    }
  }

  return null
}
