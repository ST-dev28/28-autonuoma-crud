class CarRental {
    constructor() {
        this.list =[];
    }
    intro() {
        console.log('Hi, we are CityBird and we have 0 cars available.');
    }
    addCar(car) {
        this.list.push(car);
    }
}

module.exports = CarRental;