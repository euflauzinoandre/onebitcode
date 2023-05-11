//Objeto 'Pessoa"
const person = {
    name: "Harry",
    job: "Wizard",
    parents: ["Thiago", "Lilian"] //Array 'Pais"
}

//Criando a variável 'name' e recebendo o valor dela no objeto
const name = person.name

//criando as variáveis 'job' e 'parents' e recebendo os valores delas do objeto, via recurso de desestruturação do JS
const { job, parents } = person
console.log(name, job)

//O mesmo pode ser feito com o array 'parents', lembrando que a variavel precisa ser declarada antes
const [father, mother] = parents
console.log(father, mother)


//VERSÃO 1
function createUser(person) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name: person.name,
        job: person.job,
        parents: person.parents
    }
}
const harry = createUser(person)
console.log(harry)

//VERSÃO 2
function createUser({ name, job, person }) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}
const harry2 = createUser(person)
console.log(harry2)