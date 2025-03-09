// let skills: [string, number] = [21, 'Thor'] => error
let skills1: [string, number]
skills1 = ['Thor', 21]

// skills.push(true) => error
skills1.push(22)
skills1.push('hi hi')

console.log(skills1)

console.log('--------------------------------')

let skills2: [string, number, boolean?]
skills2 = ['Thor', 21]
skills2.push(22)
skills2.push(23)
skills2.push(24)
skills2.push(true)

console.log(skills2)
