let called = 0

const fib = n => {
  called++
  if (n === 0) {
    return 1
  }
  if (n === 1) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}

const fibWithMemoize = n => {
  const memo = new Map()

  const _fibWithMemoize = n => {
    called++

    if (n === 0) {
      return 1
    }
    if (n === 1) {
      return 1
    }

    if (memo.has(n)) {
      return memo.get(n) + _fibWithMemoize(n - 2)
    }
    const memoized = _fibWithMemoize(n - 1)
    memo.set(n, memoized)

    return memoized + _fibWithMemoize(n - 2)
  }

  return _fibWithMemoize(n)
}

const fibFunc = fibWithMemoize

Array(40)
  .fill(0)
  .forEach((_, index) => {
    console.log('-----')
    console.log(index, fibFunc(index))
  })

console.log()
console.log(`called ${called} times`)
