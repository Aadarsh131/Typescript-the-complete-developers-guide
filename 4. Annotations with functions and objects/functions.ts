const add1 = (a: number, b: number): number => {
  // variable 'add1' will inference all its types from its arrow function defined, including return value's type
  return a + b;
};
const add2: (a: number, b: number) => number = (
  a: number,
  b: number
): number => {
  return a + b;
};
let add3: (a: number, b: number) => void = (a, b) => {
  /* The type of arrow function's argument 'a' is inferred from add3's type.
    The type of arrow function's argument 'b' is inferred from add3's type.
    NOTE: The type of arrow function's return value is inferred from arrow function's implementation, and not from add3's annotated return type */
  /* NOTE: also a function that returns a type (eg. number) is assignable to a function that returns void, that is the reason, let add3: (a: number, b: number) => void = (a, b) => a+b works, even if add3 expects a return type of void (since,internally it gets assigned to number)
   */
  return a + b;
};

const add = (a: number, b: number) => a + b; //same logic as above, add will infer all the types from its arrow function, hence add's type would become of what the arrow function is returning(in our case number)
