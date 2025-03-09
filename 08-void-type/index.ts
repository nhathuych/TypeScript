const sum = (a: number, b: number): number => {
  return a + b
}
console.log(sum(1, 2))

// Void type
const showSum = (a: number, b: number): void => {
  console.log('\nVoid function')
  console.log(`${a} + ${b} = ${sum(a, b)}`)
}
showSum(1, 2)
