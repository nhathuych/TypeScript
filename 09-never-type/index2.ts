function returnUndefined(): void {}

let voidResponse = returnUndefined()
console.log('The function returned:', voidResponse)
console.log('Is undefined considered a value? =>', voidResponse === undefined) // true
console.log('`undefined` is a special value that represents an uninitialized state.\n')

// A function with the never type always throws an error or runs indefinitely
function runInfinity(): never {
  console.log('Entering runInfinity...')

  while (true) {
    // console.log('Still running...')
  }

  console.log('This will never run')
}

let neverResponse = runInfinity()
console.log('The function returned:', neverResponse) // This function does not return anything, including undefined or null.
