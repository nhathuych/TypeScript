class Employee {
  name: string  // ~ public name: string
  private salary: number
  protected role: string

  constructor(name: string, salary: number, role: string) {
    this.name = name
    this.salary = salary
    this.role = role
  }

  getSalary() {
    return this.salary
  }
}

const elonMusk = new Employee("Elon Musk", 1000000000000, "Leader")
console.log(elonMusk.name)
// console.log(elonMusk.role) // error
console.log('-----------------------------------------------------------\n')



class Manager extends Employee {
  constructor(name: string, salary: number, role: string) {
    super(name, salary, role)
  }

  getRole() {
    return this.role
  }
}

const donalTrump = new Manager("Donal Trump", 20000000000, "President")
console.log(donalTrump.name)
console.log(donalTrump.getRole())
console.log(donalTrump.getSalary())
