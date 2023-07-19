//the Capital/small first letter convention meaning, 1) if its Capital it is a regural file which would export something meaningful
//2) if its a small letter (like index.js), its probably the root file or the file returning some plain object,functions,or constants
import {faker} from '@faker-js/faker'
//convention is in typescript we should never user default exports, so that we can import it with clear {} syntax
export class User{
  name: string;
  location: {
    lat:number,
    lng:number
  }
  constructor(){
   this.name = faker.person.firstName() 
   this.location = {
      lat:faker.location.latitude(),
      lng:faker.location.longitude()
    } 
  }
}

