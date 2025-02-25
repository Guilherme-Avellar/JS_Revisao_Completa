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

// map() passa para "item" o valor atual do array, automaticamente, e a arrow function que
// está como parametro de map passa o valor atual para o console.log, que exibe o valor atual.

// Passando todos os valores do array para maiúsculo e armazenando em um novo array:
const produtosMaiusculo = produtos.map((item) => {
    return item.toUpperCase();
})

/*
    map() passa para "item" o valor atual do array, automaticamente, e a arrow function que
    está como parametro de map passa o valor atual em maiúsculo para o map, com esse valor, 
    o map vai construindo um novo array com os valores modificados.
*/

console.log(produtosMaiusculo);

// exemplo com todos os paramentros
const produtosMaiusculo2 = produtos.map((item, index, array) => {
    console.log(item, index, array);
    return item.toUpperCase();
})


