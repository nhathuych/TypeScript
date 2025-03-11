import God from "./god"

let zeus = new God(100000, "Zeus", "Olympus")

console.log(zeus.name)
console.log(zeus.age)
console.log(zeus.address)

zeus.name = "Zeus The Great"
zeus.age = 696969
zeus.address = "Mount Olympus"
console.log(zeus.toString())
