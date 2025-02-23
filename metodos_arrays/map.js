// Usado para percorrer arrays, objetos, strings, etc.

// Ele retorna um novo array com os valores modificados.
// Tem como parâmetro uma função de callback que recebe 3 parâmetros:
// valorAtual, index e array. Mas só o valorAtual é obrigatório.


const produtos = ["Teclado", "Mouse", "Monitor", "Cadeira", "Mesa"];

// Percorrendo o array e exibindo os valores
produtos.map((item) => {
    console.log(item);
})

//produtos.map((item) => console.log(item));

// Passando todos os valores do array para maiúsculo e armazenando em um novo array:
const produtosMaiusculo = produtos.map((item) => {
    return item.toUpperCase();
})

console.log(produtosMaiusculo);

// exemplo com todos os paramentros
const produtosMaiusculo2 = produtos.map((item, index, array) => {
    console.log(item, index, array);
    return item.toUpperCase();
})


