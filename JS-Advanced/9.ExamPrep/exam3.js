/* class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
        this.currentWorkload = 0;
    }
    addCar(carModel, carNumber) {
        this.currentWorkload++;
        if (this.currentWorkload >= this.capacity) {
            throw new Error('Not enough parking space.');
        } else {
            return `The ${carModel}, with a registration number ${carNumber}, parked.`;
        }
    }
    removeCar(carNumber) {
        if (!carNumber) {
            throw new Error(`The car, you're looking for, is not found.`);
        }
        if (!payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        } else {

            return `${carNumber} left the parking lot.`;
        }
    }
} */

/* const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA")); */
class Parking {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.vehicles = [];
    }


    addCar(carModel, carNumber) {

        if (this.capacity <= 0) throw new Error(`Not enough parking space.`);


        let carObj = {
            model: carModel,
            number: carNumber,
            payed: false
        }

        this.vehicles.push(carObj);
        this.capacity -= 1;

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }


    removeCar(carNumber) {

        let desiredCar = this.vehicles.find(x => x.number === carNumber);

        if (!desiredCar) throw new Error(`The car, you're looking for, is not found.`);
        if (!desiredCar.payed) throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)

        let index = this.vehicles.indexOf(desiredCar);

        if (index >= 0 && index < this.vehicles.length) {
            this.vehicles.splice(index, 1);
        }

        return `${carNumber} left the parking lot.`;

    }


    pay(carNumber) {

        let desiredCar = this.vehicles.find(x => x.number === carNumber);

        if (!desiredCar) throw new Error(`${carNumber} is not in the parking lot.`);

        if (desiredCar.payed) throw new Error(`${carNumber}'s driver has already payed his ticket.`);

        desiredCar.payed = true;

        return `${carNumber}'s driver successfully payed for his stay.`;

    }


    getStatistics(carNumber) {
        let result = [];

        if (arguments.length === 0) {
            result.push(`The Parking Lot has ${this.capacity} empty spots left.`);


            let sorted = [...this.vehicles].sort((a, b) => a.model.localeCompare(b.model));

            sorted.forEach(x => {
                result.push(`${x.model} == ${x.number} - ${x.payed ? 'Has payed' : 'Not payed'}`);
            });
        }
        else {
            let desiredCar = this.vehicles.find(x => x.number === carNumber);

            result.push(`${desiredCar.model} == ${desiredCar.number} - ${desiredCar.payed ? 'Has payed' : 'Not payed'}`);
        }

        return result.join('\n');
    }
}