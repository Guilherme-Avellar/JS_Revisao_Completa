// Retorna o indice do primeiro elemento que satisfaça a condição passada na função.
// Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

const valores = [1, 2, 3, 5, 8, 13, 21];

// Encontrar o primeiro número maior que 10
const indice = valores.findIndex((valor) => valor > 10);
console.log(indice); // 5
console.log(valores[indice]); // 13

// O paramentro é uma função de callback que possui a condicional que será aplicada no
// findIndex(). Além disso "valor" é o valor do elemento atual que está sendo processado.


// Exemplo 2:
// quando não encontra
const indiceNone = valores.findIndex((valor) => valor > 100);
console.log(indiceNone); // -1
console.log(valores[indiceNone]); // undefined
