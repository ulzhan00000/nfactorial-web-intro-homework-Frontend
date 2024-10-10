let vehicle = {};

vehicle.brandName = "BMW";
vehicle.model = "X5";
console.log(vehicle); // { brandName: "BMW", model: "X5" }

vehicle.model = "M1";
console.log(vehicle); // { brandName: "BMW", model: "M1" }

delete vehicle.model;
console.log(vehicle); // { brandName: "BMW" }
