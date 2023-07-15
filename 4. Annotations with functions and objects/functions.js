var add1 = function (a, b) {
    // variable 'add1' will inference all its types from its arrow function defined, including return value's type
    return a + b;
};
var add2 = function (a, b) {
    return a + b;
};
var add3 = function (a, b) {
    /* The type of arrow function's argument 'a' is inferred from add3's type.
      The type of arrow function's argument 'b' is inferred from add3's type.
      NOTE: The type of arrow function's return value is inferred from arrow function's implementation, and not from add3's annotated return type */
    /* NOTE: also a function that returns a type (eg. number) is assignable to a function that returns void, that is the reason, let add3: (a: number, b: number) => void = (a, b) => a+b works, even if add3 expects a return type of void (since,internally it gets assigned to number)
     */
    return a + b;
};
var add = function (a, b) { return a + b; }; //same logic as above, add will infer all the types from its arrow function, hence add's type would become of what the arrow function is returning(in our case number)
//Anonymous function and normal function
function divide(a, b) {
    return a / b;
}
var multiply = function (a, b) {
    return a * b;
};
var nullTypeFn = function (message) {
    console.log(message);
    //a return of undefined would work
    return undefined;
};
//also a type of 'never' exits (in case we never want to return anything and we know we are never going to reach the end of the function)
var forecast = {
    date: new Date(),
    weather: 'sunny'
};
// const logWeather = (forecast:{date: Date, weather: string}):void =>{
//     console.log(forecast.date)
//     console.log(forecast.weather)
//   }
// logWeather(forecast)
//destructuring the arguments in a function 
var logWeather = function (_a) {
    var date = _a.date;
    console.log(date);
    // console.log(forecast.weather)
};
logWeather(forecast);
