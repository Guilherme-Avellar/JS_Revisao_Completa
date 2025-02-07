
// A conversão de data e hora para strings por métodos do JS:

let data2 = new Date("2020-12-01T12:30:12");

// Convertendo apenas para uma string:
console.log(data2.toString());

// Para retornar apenas a data:
console.log(data2.toDateString());

// Para retornar apenas a hora:
console.log(data2.toTimeString());

// Formatando data e hora de acordo com a localidade:
let data3 = new Date("2020-12-01T12:30:12");

// Nesse caso, a forma brasileira
console.log(data3.toLocaleDateString()); // 01/12/2020
// Para a hora:
console.log(data3.toLocaleTimeString()); // 12:30:12

// Para escolher o formato de exibição da data e hora:
// Para o formato americano:
console.log(data3.toLocaleDateString('en')); // 12/1/2020
console.log(data3.toLocaleTimeString('en')); // 12:30:12 PM



// ---------------------toLocaleDateString()--------------------------------

console.log(data3.toLocaleString()); // 01/12/2020, 12:30:12

// Há costumizaçoẽs pre-definidas para o método toLocaleString():
console.log(data3.toLocaleString("pt-BR", {dateStyle: 'short'})); // 12:30
console.log(data3.toLocaleString("pt-BR", {dateStyle: 'medium'})); // 1 de dez. de 2020
console.log(data3.toLocaleString("pt-BR", {dateStyle: 'long'})); // 01 de dezembro de 2020

// É possível formatar mais detalhadamente o objeto passado por parametro:
console.log(data3.toLocaleString("pt-BR", {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    })
);
// formata todos esses campos com 2 digitos

// toLocaleString() vai além de formatação apenas de data e hora,
// há outras utilidades, exemplo:
let moeda = 10.50;
console.log(moeda.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); // R$ 10,50

