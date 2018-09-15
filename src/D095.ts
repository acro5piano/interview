process.stdin.resume()
process.stdin.setEncoding('utf8')

export const distributeJuice = (juiceAmmount: number, dividable: number): number => {
  return Math.round(juiceAmmount / dividable - 0.4)
}

export const handleStdin = (chunk: string) => {
  const line = chunk.toString()
  const [juiceAmmount, dividable] = line.split('\n').map(Number)
  const res = distributeJuice(juiceAmmount, dividable)
  console.log(res)
  return res
}

process.stdin.on('data', handleStdin)
