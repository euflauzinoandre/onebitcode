class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        console.log(`Quantidade: ${this.inStock += quantity}`);
    }

    calculateDiscount(percentage) {

        const discount = this.price * (percentage / 100)

        console.log(`Preço produto: ${this.price}`);
        console.log(`Desconto: R$ ${discount}`)
        console.log(`Preço final: R$ ${this.price -= discount}`);
    }
}

const product = new Product("PS5", "Console", 500)
product.addToStock(50)
product.calculateDiscount(10)