class Vehicle {
  // color:string;
  // constructor(color:string){
  //   this.color = color
  // }
    //another short way to write the above lines is this
    constructor(public color:string){}//public, if you want the normal functionality like the above usual example for defining constructor, private and protected as its normal behaviour like in methods.
  // drive():void{//by default all are public modifiers
  //  console.log("broommmm") 
  // }
   protected blowHorn():void{
    console.log('peep peep')
  }
}

const vehicle = new Vehicle('red')
console.log(vehicle.color)
// vehicle.blowHorn() //not accessible as protected is only accessible by it subclass and within its own class and not to its instance

class Car extends Vehicle{
  constructor(public wheels:number, color:string){//notice how a modifier is not used for color, adding a modifier would mean here that we are re-assigning the color variable which we dont want if its already present, anyways if we add a modifier to it, it is wokring fine(but it would mean we are re-assigning the variable)
    super(color)
  }
  private drive():void{
    console.log('vroooom')
  }
  startDriving():void{
    this.drive()
    this.blowHorn()//as it is protected modifier, it is accessible by its subclass
  }
}

const car = new Car(4,'black')
// car.drive()//as method drive() is private, we cannot call it directly here(it can only be called by its class methods) NOTE: if the drive() which is overwriting (extending) from its parent class doesnot have the private modifier, then it will throw an error. Parent class expects its child classes to have the same modifier
car.startDriving()//but we can do something like this obviously
// car.blowHorn()//blowHorn() also not accessible here, for the same reason above
console.log(car.color)
