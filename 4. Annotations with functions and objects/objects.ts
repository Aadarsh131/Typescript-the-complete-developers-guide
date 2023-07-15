  const profile = {
    age: 23,
    name: {
      first: 'aadarsh',
      middle: 'kumar',
      last: 'shah',
    },
    hobby: 'programming',
    setAge(age: number):void{
      this.age = age
    }
  } 

  // const {age}: {age: number} = profile
  profile.setAge(25)
  const {age,hobby}: {age: number, hobby:string} = profile
  console.log(age)
  const {name: {first,middle}} : {name:{first:string,middle:string}} = profile
  console.log(hobby, '\n')
