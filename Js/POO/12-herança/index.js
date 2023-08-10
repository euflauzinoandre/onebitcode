class Property {
    constructor(area, price) {
        this.area = area
        this.price = price
    }
    getPerSquareMeter() {
        return this.price / this.area
    }
}

class House extends Property { }

const land = new Property(200, 50000)
const someHouse = new House(120, 20000)

console.log(land)
console.log(someHouse)
console.log(someHouse.instanceof.Property);

class Appartment extends Property {
    constructor(number, area, proce) {
        super(area, this.price)
        this.number = number
    }
    getFloor() {
        return this.number.slice(0, 2)
    }
}

const apt = new Appartment("201", 100, 160000)
console.log(apt);
console.log(apt.getFloor());