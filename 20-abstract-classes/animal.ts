abstract class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  abstract makeSound(): string // abstract method

  getDescription(): string {
    return `I am ${this.name} and I make a ${this.makeSound()} sound.`
  }
}

export default Animal
