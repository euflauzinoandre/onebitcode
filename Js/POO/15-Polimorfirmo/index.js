class Vehicle {
    mode() {
        console.log("O veículo está se movendo");
    }
}

class Car extends Vehicle {
    move() {
        console.log("O carro está se movendo");
    }
}

class Ship extends Vehicle {
    move() {
        console.log("O navio está se movendo");
    }
}

class AirPlane extends Vehicle {
    move(speed) {
        console.log(`A aeronave está se movendo a ${speed} km\h`);
    }
}

const lamborghini = new Car()
const blackPerl = new Ship()
const enterprise = new AirPlane()

// lamborghini.move()
// blackPerl.move()
// enterprise.move(1000000)

function start(vehicle) {
    console.log("Motores ligados...");
    vehicle.move()
}

start(lamborghini)
start(blackPerl)
start(enterprise)