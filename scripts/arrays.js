// Tem o funcionamento padrão da maioria das lingugens de programação,
// começa com o índice 0 até n-1, onde n é o numero de posições

// Criando um array com 3 elementos
let array = ["texto1", "texto2", "texto3"];

// Criando um array com o construtor
let array2 = new Array("texto1", "texto2", "texto3");

// É considerado objeto pelo JS
console.log(typeof array); // object

// Acessando o tamanho do array
console.log(array.length); // 3
// length é uma propriedade, repare que não tem os parenteses ()

// Para criar um array com posições limitadas, mas vazias
let arrayVazio = new Array(10);
console.log(arrayVazio); // [ <10 empty items> ]

// Sintaxe padrão para acesso de elementos
console.log(array[0]); // texto1
console.log(array[1]); // texto2




