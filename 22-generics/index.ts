interface MyList<T_NE_HI_HI_HI> {
  length: number
  [index: number]: T_NE_HI_HI_HI
}

const numberList: MyList<number> = [1, 2, 3] // [1, 2, 3, 'error']
const stringList: MyList<string> = ['a', 'b', 'c'] // ['a', 'b', 'c', 1] => error

console.log('numberList fist item:', numberList[0])
console.log('stringList fist item:', stringList[0])
console.log('---------------------------------------------------------------\n')



interface Student {
  id: number
  name: string
}

const studentList: MyList<Student> = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Alice' },
  // { id: 3, name: 'Charlie', age: 20 }, // age is not part of Student interface
]

console.log('studentList first item:', studentList[0])
console.log('studentList second item:', studentList[1])
console.log('---------------------------------------------------------------\n')



function printList<T>(list: MyList<T>): void {
  console.log('Your List:')
  for (let i = 0; i < list.length; i++) {
    console.log(`Item ${i}:`, list[i])
  }
}

printList<Student>(studentList)
console.log('---------------------------------------------------------------\n')
