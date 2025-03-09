enum API_V1_STATUS {
  PENDING,
  REJECTED,
  FULFILLED,
}

console.log(API_V1_STATUS)
console.log('--------------------------------')

console.log(Object.keys(API_V1_STATUS))
console.log('--------------------------------')

console.log(API_V1_STATUS[0])
console.log(API_V1_STATUS['1'])
console.log(API_V1_STATUS['FULFILLED'])
console.log('--------------------------------')
