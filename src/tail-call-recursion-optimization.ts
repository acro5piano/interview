export function factorial(n: number): number {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

export function factorialTailCall(n: number): Promise<number> {
  function _factorial(n: number, acc: number): Promise<number> {
    return new Promise(resolve => {
      if (n === 0) {
        return resolve(acc)
      } else {
        return process.nextTick(() => {
          resolve(_factorial(n - 1, n * acc))
        })
      }
    })
  }
  return _factorial(n, 1)
}

const range = (r: number) => Array(r).fill(0)
factorialTailCall(10000).then(console.log)

range(100).forEach(() => {
  range(1000).forEach((_, index) => {
    factorialTailCall(index).then(console.log)
  })
})

// range(10).forEach(() =>
//   range(10000).forEach(async (_, index) => {
//     const res = await factorialTailCall(index)
//     console.log(res)
//   }),
// )
