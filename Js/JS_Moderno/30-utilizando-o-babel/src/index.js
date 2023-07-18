//MÉDIA SIMPLES
const average = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}
console.log(`Media Aritmérica Simples: ${average(3, 2, 10, 8, 5, 9)}`)

//MÉDIA PONDERADA
const weightAverage = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
}
console.log(`Média Ponderada: ${weightAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
)}`)

//MEDIANA
const median = (...numbers) => {
    const orderNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderNumbers.length / 2)
    if (orderNumbers.length % 2 !== 0) {
        return orderNumbers[middle]
    } else {
        const firstMedian = orderNumbers[middle - 1]
        const secondMedian = orderNumbers[middle]
        return average(firstMedian, secondMedian)
    }
}
console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

//MODA
const mode = (...numbers) => {
    // [ [n, qtd] [n, qtd] [n, qtd] ]
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}
console.log(`Moda: ${mode(1, 1, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)