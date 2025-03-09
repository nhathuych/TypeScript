enum API_V2_STATUS {
  HIHIHI = 1 + 1 + 1,
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  FULFILLED = 'FULFILLED',
}

console.log(API_V2_STATUS)
console.log('--------------------------------')

console.log(Object.keys(API_V2_STATUS))
console.log('--------------------------------')

for (const status in API_V2_STATUS) {
  console.log(status)
}
console.log('--------------------------------')

console.log(API_V2_STATUS.HIHIHI)
console.log(API_V2_STATUS.PENDING)
console.log(API_V2_STATUS.REJECTED)
console.log(API_V2_STATUS.FULFILLED)
console.log('--------------------------------')
