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

const fibWithMemoirze = n => {
  const memo = new Map()

  const _fibWithMemoirze = n => {
    called++

    if (n === 0) {
      return 1
    }
    if (n === 1) {
      return 1
    }

    if (memo.has(n)) {
      return memo.get(n) + _fibWithMemoirze(n - 2)
    }
    const memoized = _fibWithMemoirze(n - 1)
    memo.set(n, memoized)

    return memoized + _fibWithMemoirze(n - 2)
  }

  return _fibWithMemoirze(n)
}

const fibFunc = fibWithMemoirze

Array(40)
  .fill(0)
  .forEach((_, index) => {
    console.log('-----')
    console.log(index, fibFunc(index))
  })

console.log()
console.log(`called ${called} times`)
