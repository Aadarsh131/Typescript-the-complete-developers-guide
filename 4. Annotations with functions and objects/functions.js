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
console.log(add3(9, 5));
