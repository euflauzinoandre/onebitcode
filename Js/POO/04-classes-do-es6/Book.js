class Book {
    constructor(title) {
        this.title = title
        this.published = false
    }

    publish() {
        this.published = true
    }
}

const cleanCode = new Book("Clean Code")
const theSecret = new Book("The Sechret")

theSecret.publish()

console.log(cleanCode)
console.log(theSecret)