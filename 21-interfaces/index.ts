import IEmpire from "./empire"

let mightyAmerica: IEmpire = {
  name: "America",
  population: 346_709_811
}

function showStrength(empire: IEmpire) {
  return `The strength of ${empire.name} is ${empire.population.toLocaleString()} people.`
}

console.log(showStrength(mightyAmerica))
