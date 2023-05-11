const a = 0 //false
const b = null //false
const c = "Teste" //true

console.log(a || b || c)
console.log(b ?? a)

let x = 0
let y = x || 42

console.log({ x, y })

y = x ?? 42

console.log({ x, y })

let z = false ?? 42
console.log({ z })