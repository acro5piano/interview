console.log('hello')

export const A = 'a'

export const getPairFromNumberArray = (array: number[]): number[] | null => {
  array.reduce((car: Set<number>, cur: number) => {
    if (!car.has(cur)) {
      car.add(cur)
    }
    return car
  }, new Set<number>())
  ;[1].includes(2)

  return [2, 8]
}
