interface Report {
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

const printVehicle = (thing: Report):void => {
  // console.log( `Name: ${vehicle.name}`)
  // console.log( `year: ${vehicle.year}`)
  // console.log( `broken: ${vehicle.broken}`)
  console.log(thing.summary())
}

printVehicle(Car)
printVehicle(coke)
