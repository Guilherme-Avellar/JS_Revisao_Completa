


function criarProduto(nome) {
    const produto = {};

    produto.nome = nome;
    produto.detalhes = function() {
        console.log(`O nome do produto é ${this.nome}`);
        // O JS reconhece o this como o contexto do objeto produto, mesmo
        // estando em uma função construtora.
    }

    return produto;
}

const produto1 = new criarProduto('teclado');
produto1.detalhes(); // O nome do produto é teclado
console.log(produto1.nome); // teclado

const produto2 = new criarProduto('mouse');
produto2.detalhes(); // O nome do produto é mouse
console.log(produto2.nome); // mouse

// São dois objetos diferentes
console.log(produto1 === produto2); // false


// Porém geralmente é feito de outra forma.

// De uma forma em que a criação do objeto é implicita e o return
// do objeto é feito automaticamente. Isso é possível pelo uso do
// new. O this cria e passa como referencia tudo para o objeto
// em que se está criando.

// A outra forma de se fazer:
function criarPessoa(nome) {
    this.nome = nome;
    this.mensagem = function() {
        console.log(`O nome da pessoa é ${this.nome}`);
    }
}
// Note que não há o:
// const pessoa = {};
// return pessoa;

// Tudo isso é automatizado pelo new e o this.

// Neste caso é obrigatório o uso do new

const pessoa1 = new criarPessoa('Lucas');
pessoa1.mensagem(); // O nome da pessoa é Lucas

const pessoa2 = new criarPessoa('João');
pessoa2.mensagem(); // O nome da pessoa é João

// O JS até sugere de transformar essa função em uma classe
