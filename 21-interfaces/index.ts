import IEmpire from "./empire"

let mightyAmerica: IEmpire = {
  name: "America",
  population: 346_709_811
}

function showStrength(empire: IEmpire) {
  return `The strength of ${empire.name} is ${empire.population.toLocaleString()} people.`
}

console.log(showStrength(mightyAmerica))
console.log("------------------------------------------------------------------\n")



class GloriousEmpire implements IEmpire {

  constructor(public name: string, public population: number, public area: number) {
  }

  strength(): string {
    return `The strength of ${this.name} is ${this.population.toLocaleString()} people, covering ${this.area.toLocaleString()} km².`
  }
}

let legendaryRome: GloriousEmpire = new GloriousEmpire("Rome", 69_000_000, 5_500_000)
console.log(legendaryRome.strength())
console.log("------------------------------------------------------------------\n")
