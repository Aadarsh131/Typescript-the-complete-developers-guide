var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    // color:string;
    // constructor(color:string){
    //   this.color = color
    // }
    //another short way to write the above lines is this
    function Vehicle(color) {
        this.color = color;
    } //public, if you want the normal functionality like the above usual example for defining constructor, private and protected as its normal behaviour like in methods.
    // drive():void{//by default all are public modifiers
    //  console.log("broommmm") 
    // }
    Vehicle.prototype.blowHorn = function () {
        console.log('peep peep');
    };
    return Vehicle;
}());
var vehicle = new Vehicle('red');
console.log(vehicle.color);
// vehicle.blowHorn() //not accessible as protected is only accessible by it subclass and within its own class and not to its instance
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(wheels, color) {
        var _this = _super.call(this, color) || this;
        _this.wheels = wheels;
        return _this;
    }
    Car.prototype.drive = function () {
        console.log('vroooom');
    };
    Car.prototype.startDriving = function () {
        this.drive();
        this.blowHorn(); //as it is protected modifier, it is accessible by its subclass
    };
    return Car;
}(Vehicle));
var car = new Car(4, 'black');
// car.drive()//as method drive() is private, we cannot call it directly here(it can only be called by its class methods) NOTE: if the drive() which is overwriting (extending) from its parent class doesnot have the private modifier, then it will throw an error. Parent class expects its child classes to have the same modifier
car.startDriving(); //but we can do something like this obviously
// car.blowHorn()//blowHorn() also not accessible here, for the same reason above
console.log(car.color);
