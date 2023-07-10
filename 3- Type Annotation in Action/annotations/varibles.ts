//Type annotation is what we give explicit give type to variables
//Type inferece is what ts/js gives types automatically to variables

let apples: number = 5;
apples = 10;
let anyyy;
anyyy = 45;
let security: boolean = true;
let nothing: null = null;
let something: undefined = undefined;

//built in objects

let now: Date;

//Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [34, 53, 23.543];
let booleans: boolean[] = [true, false];

//classes
class Car {
  //usually uppercase first letter denotes a Class
}
let car: Car = new Car();

//Objects literal
let point: { x: number; y: number } = {
  x: 40,
  y: 43,
};

//funcitons but annotaions is only for the function name and not the funciton
const doubleNumber: (n: number) => number = (n) => {
  return n * 2;
};

//why to use type annotations over inferece and when to use it
const json = '{"x":10,"y":40}';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords.x);
//console.log(coords.iowijef);//will eventually throws an error by the ts, because we explicitly annotated the 'coords' type

//NOTE: Type inferece only works when we declare and initilaize the variable at the same time,
//eg. let x=5;
//But, this limitation can easily be fixed by just using type inference, eg
//eg. let x:numebr;
//x=5;

/*
let isOrWhichNumber = false;
isOrWhichNumber = 500;
*/
//NOTE: in js if we do the above logic of first declaring and initilaizing at the same time and then changing its value(of a different datatype), then unlike in ts, it doesnot throws an error, it will work absolutely fine
//in ts, to work, we can do something like this-
let isOrWhichNumber: boolean | number = false;
isOrWhichNumber = 500;
