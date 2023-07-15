const coke = {
  color: 'brown',
  carbonated: true,
  suger: 40
}

type Drink = [string,boolean,number] //aliasing the type
const pepsi: Drink = ['red', true, 34]
const sprite: Drink = ['green', true, 30]
const mDew: Drink = ['lightGreen', true, 34]

//objects defined are more commonly used for many reasons, but tuples do fit it in some rare cases when neccessay

