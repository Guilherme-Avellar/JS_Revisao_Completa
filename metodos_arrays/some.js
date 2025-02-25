// Testa se pelo menos um dos elementos do array satisfaz a condição, retornando
// um valor Booleano.

const idades = [20, 30, 40, 50, 60, 70];
const idades2 = [15, 25, 35, 45, 55, 65];

let testeDeIdade;

testeDeIdade = idades.some((valor) => valor < 18);
console.log(testeDeIdade); // false

testeDeIdade = idades2.some((valor) => valor < 18);
console.log(testeDeIdade); // true
