import {User} from './User'
import {Company} from './Company'
export class CustomMap{
   private googleMap: google.maps.Map;
   private center: google.maps.LatLngLiteral = {lat: 0, lng: 0};

  constructor(id:string){
    this.googleMap = new google.maps.Map(document.getElementById(id) as HTMLElement, {
    center: this.center,
    zoom: 1,
  });   
  }
  
 addUserMarker(user:User):void{
      new google.maps.Marker({map: this.googleMap, position: {
          lat : user.location.lat,
          lng: user.location.lng
    }})
  } 
  addCompanyMarker(company:Company):void{

  }
}
