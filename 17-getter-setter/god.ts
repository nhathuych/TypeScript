class God {
  private _age: number
  private _name: string
  private _address: string

  constructor(_age: number, _name: string, _address: string) {
    this._age = _age
    this._name = _name
    this._address = _address
  }

  // getter
  get age(): number { return this._age }
  get name(): string { return this._name }
  get address(): string { return this._address }

  // setter
  set age(newAge: number) { this._age = newAge }
  set name(newName: string) { this._name = newName }
  set address(newAddress: string) { this._address = newAddress }

  toString(): string {
    return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`
  }
}

export default God
