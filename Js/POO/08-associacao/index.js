const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Forest", 22, "Center", "Manhatan", "New York")
const john = new Person("John doe", addr)

console.log(john)
console.log(john.address.fullAddress());