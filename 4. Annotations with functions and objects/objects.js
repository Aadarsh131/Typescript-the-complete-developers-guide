var profile = {
    age: 23,
    name: {
        first: 'aadarsh',
        middle: 'kumar',
        last: 'shah',
    },
    hobby: 'programming',
    setAge: function (age) {
        this.age = age;
    }
};
// const {age}: {age: number} = profile
profile.setAge(25);
var age = profile.age, hobby = profile.hobby;
console.log(age);
// const {name: {first,middle}} : {name:{first:string,middle:string}} = profile
console.log(hobby);
