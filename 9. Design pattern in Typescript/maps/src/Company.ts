import {faker} from "@faker-js/faker"

export class Company{
  name:string;
  cactchPhrase: string;
  suffix:string[];
  constructor(){
    this.name = faker.company.name();
    this.cactchPhrase = faker.company.catchPhrase();
    this.suffix= faker.company.suffixes()
  }
}
