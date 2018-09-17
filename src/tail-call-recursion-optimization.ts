export function factorial(n: number): number {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

export function factorialTailCall(n: number): number {
  function _factorial(n: number, acc: number): number {
    if (n === 0) {
      return acc
    } else {
      return _factorial(n - 1, n * acc)
    }
  }

  return _factorial(n, 1)
}

const range = (r: number) => Array(r).fill(0)

range(10).forEach(() => {
  range(10000).forEach((_, index) => {
    factorialTailCall(index)
  })
})
