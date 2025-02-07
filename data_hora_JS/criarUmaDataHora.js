// Uma exibição simples:
console.log(new Date());

// Date() possui diversos métodos

console.log(new Date().getTime());
// Retorna o tempo em milisegundos desde 01/01/1970
// é uma data que o JS usa como referencia
console.log(new Date(0));
// O primeiro horario do JS é 01/01/1970
// Porém pode aparecer outro resultado, pois 
// o JS ajusta para o seu fuso horario


// Para criar uma data específica:
console.log(new Date(2020, 11, 1)); // 01/12/2020
// Obs: O mês é indexado em 0, ou seja, 0 = Janeiro

// Para definir uma data e hora:
console.log(new Date(2020, 11, 1, 12, 30, 12)); // 01/12/2020 12:30:12

// Outra variação de fazer a mesma coisa:
console.log(new Date('2020-12-01T12:30:12'));
// Dessa vez o mes 12 é dito como 12, pois é uma string
// Outra forma:
console.log(new Date("December 01, 2020 12:30:12"));


// Guardando uma data em uma variavel:
let dataQualquer = new Date("2020-12-01T12:30:12");
console.log(dataQualquer);
