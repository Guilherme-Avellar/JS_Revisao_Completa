// O this se refere ao contexto em que se está.
// É possível não declarar as variaveis do objeto, que com o uso do 
// this, os atributos são criados automaticamente:

class Product {
    // name;
    // price;
    // discount;
    constructor(name, price, discount = 0.1) {
        this.name = name
        this.price = price
        this.discount = discount
    }

    priceWithDiscount() {
        return this.price * (1 - this.discount)
    }
}

const product1 = new Product('Pen', 7.99)

const product2 = new Product('Notebook', 2998.99, 0.25)

// Os atributos existem, mesmo sem ter sido declarados explicitamente:

console.log("\nnome do produto: ", product1.name)

console.log("\npreço do produto com desconto: ", product2.priceWithDiscount())

