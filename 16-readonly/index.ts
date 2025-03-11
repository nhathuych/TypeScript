class Mortal {
  // readonly is used for properties of an object, class, or interface
  // no need to assign a value at the time of declaration.
  readonly birthday: Date

  constructor(birthday: Date) {
    this.birthday = birthday // allowed in the constructor
  }

  // // compile error
  // setBirthday(birthday: Date) {
  //   this.birthday = birthday
  // }
}

const sam = new Mortal(new Date(2001, 1, 1))
// sam.birthday = new Date(2002, 2, 2) // compile error
