import God from "../17-getter-setter/god"

class Demigod extends God {
  constructor(_age: number, _name: string, _address: string) {
    super(_age, _name, _address)
  }

  // override
  toString(): string {
    console.log("Ancestor version:")
    console.log(super.toString()) // Call the parent class's toString() method
    console.log()

    return `Child version:\nDemigod: ${this.name}, Age: ${this.age}, Address: ${this.address}`
  }
}

let hercules = new Demigod(19, "Hercules", "Thebes")

console.log(hercules.toString())
