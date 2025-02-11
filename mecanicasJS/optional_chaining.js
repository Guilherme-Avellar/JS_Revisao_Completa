
// O Optional Chaining (?.) é um operador do JavaScript que permite acessar propriedades
// de objetos de forma segura, evitando erros quando uma propriedade ou método não existe.


const user = {
    name: "João",
    age: 30,
    /*
    address: {
        street: "Rua 1",
        number: 123,
        city: "Cidade A",
        geo: {
            lat: 0,
            lng: 0,
        },
    },
    */
    /*
    menssage: function() {
        console.log(`Olá, eu sou ${this.name}!`);
    },
    */
}

// console.log(user.address.city); // erro

console.log(user.address?.city); // undefined, não dá erro

console.log(user?.address?.city); // pode se testar o objeto inteiro

// testando um método que não existe

console.log(user.menssage?.()); // undefined, não dá erro

