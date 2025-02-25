// Cria um novo array que passaram em uma determinada condição.
// Tem como parâmetro uma função de callback que recebe 3 parâmetros:
// valorAtual, index e array. Mas só o valorAtual é obrigatório.


const produtos = ["Teclado", "Mouse", "Monitor", "Cadeira", "Mesa"];


// Exemplo 1:
// Filtra os produtos que tem mais de 5 caracteres.
const produtosFiltrados = produtos.filter((item) => {
    return item.length > 5;
})
// const produtosFiltrados = produtos.filter((item) => item.length > 5)

// Novo array criado pelo filter
console.log(produtosFiltrados); // [ 'Teclado', 'Monitor', 'Cadeira' ]


// Exemplo com um objeto:
const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "José", idade: 20 },
    { nome: "Pedro", idade: 35 },
]

// Filtra as pessoas que tem mais de 25 anos.
const pessoasFiltradas = pessoas.filter((item) => {
    return item.idade > 25;
})

console.log(pessoasFiltradas);

