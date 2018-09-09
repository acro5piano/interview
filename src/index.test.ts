import { A, getPairFromNumberArray } from './'

it('a', () => {
  expect(A).toEqual('a')
})

describe('getPairFromNumberArray', () => {
  it('get pair', () => {
    expect(getPairFromNumberArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([2, 8])
    expect(getPairFromNumberArray([1, 9])).toEqual([1, 9])
    expect(getPairFromNumberArray([3, 5, 7])).toEqual([3, 7])
    expect(getPairFromNumberArray([5, 7])).toEqual(null)
  })
})
