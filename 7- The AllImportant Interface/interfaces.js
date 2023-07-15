var Car = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary: function () {
        return "Car is in bad condition";
    }
};
var printVehicle = function (vehicle) {
    // console.log( `Name: ${vehicle.name}`)
    // console.log( `year: ${vehicle.year}`)
    // console.log( `broken: ${vehicle.broken}`)
    console.log(vehicle.summary());
    // console.log(vehicle)
};
printVehicle(Car);
