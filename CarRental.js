class CarRental {
    constructor(name) {
        this.list = [];
        this.companyName = name;
    }

    intro() {
        let count = 0;
        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            if (car.good === true) {
                count++;
            }
        }
        console.log(`Hi, we are ${this.companyName} and we have ${count} cars available.`);
    }

    addCar(model, color, price) {
        this.list.push({ model, color, price, good: true });
        //arba
        //let carInfo = {model, color, price, good}
        // this.list.push(carInfo);

        console.log('----------------');
    }

    carPark() {
        let carNumber = 0;
        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            carNumber++;
            if (car.good === true) {
                console.log(`${carNumber}. ${car.model} (${car.color}) is for ${car.price}EUR/day`)
            }
        }
        console.log('----------------');
    }
    updateCarPrice(index, newPrice) {
        this.list[index].price = newPrice;

        console.log('----------------');
    }
    carAccident(index) {
        this.list[index].good = false;

        console.log('------------------');
    }

    carRepair(index) {
        this.list[index].good = true;

        console.log('------------------');
    }
    removeCar(index) {
        const updatedList = [];

        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {
                updatedList.push(this.list[i]);
            }
        }
        this.list = updatedList; //perrasau LIST reiksme (overwrite)

        console.log('------------------');
    }
}

module.exports = CarRental;