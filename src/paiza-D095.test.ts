import { handleStdin } from './paiza-D095'

it('can output correct result', () => {
  let pseudoInput

  pseudoInput = '500\n180\n'
  expect(handleStdin(pseudoInput)).toBe(2)

  pseudoInput = '1000\n150\n'
  expect(handleStdin(pseudoInput)).toBe(6)

  pseudoInput = '150\n50\n'
  expect(handleStdin(pseudoInput)).toBe(3)

  pseudoInput = '2000\n10\n'
  expect(handleStdin(pseudoInput)).toBe(200)
})
