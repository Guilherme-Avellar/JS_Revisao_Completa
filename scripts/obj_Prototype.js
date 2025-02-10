// Prototype é um mecanismo de herança em JavaScript.
// Permite que objetos compartilhem propriedades e métodos entre si.

// Lembrando que quase tudo é um objeto em JS, como uma função, por
// exemplo.

// __proto__ é a palavra-chave que acessa o prototype de um objeto.
// É possível acessar o prototype de um objeto e modifica-lo, seja 
// alterando ou adicionando propriedades e métodos.


function Pessoa(nome) {
    this.nome = nome;
}

// Adicionando um método ao prototype
Pessoa.prototype.cumprimentar = function() {
    console.log(`Olá, meu nome é ${this.nome}`);
};


const pessoa1 = new Pessoa("João");
const pessoa2 = new Pessoa("Maria");

// pessoa1 e pessoa2 compartilham o mesmo metódo cumprimentar, que 
// foi adicionado ao prototype da função Pessoa:
pessoa1.cumprimentar();
pessoa2.cumprimentar();


console.log(pessoa1.__proto__ === Pessoa.prototype); // true
console.log(Pessoa.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null

console.log(pessoa1.__proto__.__proto__.__proto__); // null


// Até mesmo uma String é um objeto em JS:
const textoQualquer = "Olá, mundo!";
console.log(textoQualquer.__proto__);
// Se navegar pelo console do navegador, é possível ver todas
// hereanças de um objeto, até chegar em Object.prototype.


