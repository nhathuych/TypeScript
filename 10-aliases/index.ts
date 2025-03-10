type myType = number|string

function add(a: myType, b: myType) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return `${a} ${b}`
  }
  throw new Error('Invalid input types')
}

console.log('check: ', add(1, 2))
console.log('check: ', add('Huy', 'Huy'))
