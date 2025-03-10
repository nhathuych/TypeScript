function addNew(a: number, b: number): number
function addNew(a: string, b: string): string

// implementation must be a general function that handles all cases
function addNew(a: any, b: any) { return a + b }

console.log(addNew(1, 2))
console.log(addNew('Elon', ' Musk'))
