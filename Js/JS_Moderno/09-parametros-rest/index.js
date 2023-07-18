function sum(...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1, 1))
console.log(sum(2, 2, 2, 2, 2, 2))
console.log(sum(32, 74, 7, 22, 10, 17, 23))