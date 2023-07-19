import {User} from './User';
import {Company} from './Company'

// const company = new Company()
//
//  const user = new User()
// console.log(user,company)
import { CustomMap } from "./CustomMap";

const user = new User(); 
const company = new Company();
const customMap = new CustomMap('map');

// customMap.addUserMarker(user)
// customMap.addCompanyMarker(company)
 customMap.addMarker(user)
customMap.addMarker(company)
