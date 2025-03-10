class Person {
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

const elon = new Person("Elon", "Musk")
console.log(elon.getFullName())
console.log(elon.firstName)
console.log(elon.lastName)
console.log(elon)
console.log(Person)
