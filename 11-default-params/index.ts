const helloMessage = (name1: string, name2 = "Elon Musk") => {
  console.log(`Hello, ${name1}! I'm ${name2}.`)
}

helloMessage("Huy")
helloMessage("Huy", "Donal Trump")
