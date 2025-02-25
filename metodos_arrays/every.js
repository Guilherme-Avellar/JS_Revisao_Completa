// Testa se TODOS os elementos do array satisfazem a condição, retornando
// um valor Booleano.

const idade = [20, 30, 40, 50, 60, 70];
const idade2 = [15, 25, 35, 45, 55, 65];

// Para verificar se TODAS as idades são maiores ou iguais a 18 anos
let testeDeIdade;

testeDeIdade = idade.every((valor) => valor >= 18);
console.log(maiorDeIdade); // true

testeDeIdade = idade2.every((valor) => valor >= 18);
console.log(maiorDeIdade); // false
