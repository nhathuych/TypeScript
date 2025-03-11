import Animal from "./animal"

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }

  // override
  makeSound(): string {
    return "Woof!"
  }
}

export default Dog
