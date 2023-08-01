function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = true
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity) {
        this.inStock += quantity
    }
    this.save = function () {
        //salvar no banco
    }
}

const tags = ["fantasy", "magic"]
const author = { name: "JK Rowling" }

const harryPottterAndThePhilosopherStone = new Book("Harry Potter and the Philosopher Stone", 223, tags, author)

console.log(harryPottterAndThePhilosopherStone);