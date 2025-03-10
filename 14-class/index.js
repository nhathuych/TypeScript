var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var elon = new Person("Elon", "Musk");
console.log(elon.getFullName());
console.log(elon.firstName);
console.log(elon.lastName);
console.log(elon);
console.log(Person);
