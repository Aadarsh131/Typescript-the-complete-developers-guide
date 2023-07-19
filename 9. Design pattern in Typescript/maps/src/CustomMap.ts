// import {User} from './User'
// import {Company} from './Company'

interface Mapable {
  location: {
    lat: number,
    lng: number
  }
}

export class CustomMap{
   private googleMap: google.maps.Map;
   private center: google.maps.LatLngLiteral = {lat: 0, lng: 0};

  constructor(id:string){
    this.googleMap = new google.maps.Map(document.getElementById(id) as HTMLElement, {
    center: this.center,
    zoom: 1,
  });   
  }

  /* Approach 1- not a good code to add two functions for one task */
//  addUserMarker(user:User):void{
//       new google.maps.Marker({map: this.googleMap, position: {
//           lat : user.location.lat,
//           lng: user.location.lng
//     }})
//   } 
//   addCompanyMarker(company:Company):void{
//     new google.maps.Marker({map: this.googleMap, position:{
//       lat: company.location.lat,
//       lng: company.location.lng
//     }})
//   }

  /*Approach 2- this approach is still not the good approach, as it is not scalable */
  // addMarker(mapable: User | Company):void{ // '|' operation here checks for common properties, and all the uncommon properties/methods would be discarded by default by the Ts
  //
  //   //so User.name or Company.cactchPharase is not available
  //
  //   new google.maps.Marker({map: this.googleMap, position:{
  //     lat: mapable.location.lat,
  //     lng: mapable.location.lng
  //   }})
  //
  // }
  
  /*Approach 3(best approach)- using interface to satify the condition */  
  addMarker(mapable: Mapable):void{
    new google.maps.Marker({map:this.googleMap, position:{
      lat: mapable.location.lat,
      lng: mapable.location.lng
    }})
    new google.maps.InfoWindow({content:'Hi there!'})
  }
}
