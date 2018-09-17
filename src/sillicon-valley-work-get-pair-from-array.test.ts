import {
  getPairFromNumberArray,
  // getPairFromNumberArrayUsingFor,
} from './sillicon-valley-work-get-pair-from-array'

// describe('getPairFromNumberArrayUsingFor', () => {
//   it('get pair', () => {
//     expect(getPairFromNumberArrayUsingFor([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(
//       [1, 9],
//     )
//     expect(getPairFromNumberArrayUsingFor([1, 9])).toEqual([1, 9])
//     expect(getPairFromNumberArrayUsingFor([3, 5, 7])).toEqual([3, 7])
//     expect(getPairFromNumberArrayUsingFor([5, 7])).toEqual(null)
//   })
// })

describe('getPairFromNumberArray', () => {
  it('get pair', () => {
    expect(getPairFromNumberArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([6, 4])
    expect(getPairFromNumberArray([1, 9])).toEqual([9, 1])
    expect(getPairFromNumberArray([3, 5, 7])).toEqual([7, 3])
    expect(getPairFromNumberArray([5, 7])).toEqual(null)
  })
})
