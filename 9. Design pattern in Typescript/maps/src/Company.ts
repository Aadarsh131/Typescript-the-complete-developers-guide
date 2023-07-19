import {faker} from "@faker-js/faker"

export class Company{
  name:string;
  cactchPhrase: string;
  location: {
    lat:number,
    lng:number
  };
  constructor(){
    this.name = faker.company.name();
    this.cactchPhrase = faker.company.catchPhrase();
    this.location = {
      lat:faker.location.latitude(),
      lng:faker.location.longitude()
    }
  }
}
