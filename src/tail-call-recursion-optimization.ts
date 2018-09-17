export function factorial(n: number): number {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

export function factorialTailCall(n: number, acc: number = 1): number {
  if (n === 0) {
    return acc
  } else {
    return factorialTailCall(n - 1, n * acc)
  }
}

export function factorialTailCallUsingPromise(n: number): Promise<number> {
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

// TODO: Maximum call stack size exceeded
// factorialTailCall(100000)

range(10).forEach(() =>
  range(100000).forEach((_, index) => {
    factorialTailCall(index)
    // const res = factorialTailCall(index)
    // console.log(res)
  }),
)
