const user = {
    name: 'Batman',
    email: 'batman@begins.com',
    friends: [{
        name: 'Superman',
        address: 'Smallville',
        number: 'null'
    }],
    age: 58,
    phone: {
        coutryCode: '+33',
        ddd: '44',
        number: '991915544'
    }
}

//console.log(user.friends[0].phone.ddd)
console.log(user.friends[0].phone?.ddd)
console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)