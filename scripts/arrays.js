// Tem o funcionamento padrão da maioria das lingugens de programação,
// começa com o índice 0 até n-1, onde n é o numero de posições.
// Porém um array do JS aceita qualquer tipo de dado, até mesmo funções.

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

// Para criar um array com todas os caracteres de uma String sendo posições distintas
stringQualquer = "Nome Qualquer"
console.log(Array.from(stringQualquer)); // ["N", "o", "m", "e", " ", "Q", "u", "a", "l", "q", "u", "e", "r"]

// Para adicionar ou remover um elemento do array
let arrayVazio2 = [];

// Para adicionar um elemento no final do array
arrayVazio2.push("rodrigo");
arrayVazio2.push("joao");
arrayVazio2.push("ana");

// Para adicionar um elemento no inicio do array
arrayVazio2.unshift("maria");

// Para remover um elemento no inicio do array
arrayVazio2.shift();

// Para remover um elemento no final do array
arrayVazio2.pop();


// Procurar a posição de um elemento no array
console.log(array.indexOf("texto2")); // 1
// Se não encontrar, retorna -1


let array3 = ["texto1", "texto2", "texto3", "texto4", "texto5"];
// Para remover vários elementos de um array
// splice(posicao, quantidade)
array3.splice(1, 3);
// Remove a partir da posição 1, 3 elementos consecutivos
console.log(array3); // ["texto1", "texto5"]
// Seria possivel remover um elemento expecífico caso se saiba
// a posição, por exemplo:
// array3.splice(posicao, 1); // remove exatemente 1 elemento


// Tipos de dados que um array suporta em JS:
let arrayJS = [
    "texto",
    10,
    10.5,
    true,
    false,
    null,
    undefined,

    {
        nome: "rodrigo",
        email: "rodrigo@email.com"
    },

    function() {
        console.log("função dentro de um array");
    }
]

// Para acessar a função dentro do array há um detalhe
arrayJS[8]();
// precisa se usar os parenteses () para executar a função
// Para acessar um objeto dentro do array
console.log(arrayJS[7].nome); // rodrigo


// Para verificar se um elemento existe no array
console.log(array.includes("texto2")); // true
console.log(array.includes("texto")); // false

