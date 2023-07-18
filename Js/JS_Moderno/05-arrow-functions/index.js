//FUNÇÃO NORMAL
function normalSum(a, b) {
    return a + b
}
console.log(`Soma normal: ${normalSum(2, 3)}`)

//FUNÇÃO ANÔNIMA
const anonymousSum = function (a, b) {
    return a + b
}
console.log(`Soma anônima: ${anonymousSum(7, 2)}`)

//ARROW FUNCTION
const arrowSum = (a, b) => {
    return a + b
}
console.log(`Soma arrow: ${arrowSum(6, 8)}`)

//ARROW FUNCTION 1 LINHA
const arrowSub = (a, b) => a - b
console.log(`Subtração arrow: ${arrowSub(5, 3)}`)

//PASSANDO A PRÓPRIA ARROW COMO PARÂMETRO
const double = n => `O dobro de ${n} é ${n * 2}`
const number = 12
console.log(double(number))

//ARROW FUNCTION COM ARRAY
const countries = ["Canada", "Brasil", "Camarões", "Marrocos", "EUA", "China", "Japão", "Irlanda", "Portugal"]

const coutriesWithC = countries.filter(countrie => countrie[0] === 'C')
console.log(`Países com a letra C: ${coutriesWithC}`)

