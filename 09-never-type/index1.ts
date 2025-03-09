// A function with the never type always throws an error or runs indefinitely
function handleException(errorMsg: string): never {
  console.log(errorMsg)
  throw new Error(errorMsg)
}

try {
  handleException('This is an error test')
} catch (error) {
  if (error instanceof Error) {
    console.log('Caught an exception: ', error.message);
  } else {
    console.log('Caught an unknown error: ', error);
  }
}
