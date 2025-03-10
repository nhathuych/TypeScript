const multiplyNumbers = (i: number, ...numbers: number[]) => {
  console.log('\norigin numbers:', numbers)

  return numbers.map(num => num * i)
}

console.log('result:', multiplyNumbers(1, 1, 2))
console.log('result:', multiplyNumbers(2, 1, 2, 3))
