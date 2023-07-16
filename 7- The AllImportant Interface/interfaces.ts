interface Reports {
  // name: string,
  // year: number,
  // broken: boolean,
  summary(): string,
}

const coke = {
  color: 'brown',
  carbonated: true,
  suger: 40,
  summary(){
    return `Coke is worst for health`
  }
}

const Car = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(){
    return `Car is in bad condition`
  }
}

const printSummary = (thing: Reports):void => { //Interfaces like Reports which we created for our usecase works as a gatekeeper in general (using the interface we can specify what data we actually want, rather than the whole object[in our case Car and coke])
  // console.log( `Name: ${vehicle.name}`)
  // console.log( `year: ${vehicle.year}`)
  // console.log( `broken: ${vehicle.broken}`)
  console.log(thing.summary())
}

printSummary(Car)
printSummary(coke)
