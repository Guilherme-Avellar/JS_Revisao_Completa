// Retorna o primeiro elemento que satisfaça a condição passada na função.
// Caso contrário, retorna undefined, indicando que nenhum elemento passou no teste.



const valores = [1, 2, 3, 5, 8, 13, 21];

// Encontrar o primeiro número maior que 10
const valor = valores.find((valor) => valor > 10);
console.log(valor); // 13

// Exemplo 2:
// quando não encontra
const valorNone = valores.find((valor) => valor > 100);
console.log(valorNone); // undefined


// Exemplo 3:
// com objetos
const pessoas = [
  { nome: 'João', idade: 20 },
  { nome: 'José', idade: 30 },
  { nome: 'Maria', idade: 40 },
];

const resultado = pessoas.find((pessoa) => pessoa.nome === 'José');
console.log(resultado); // { nome: 'José', idade: 30 }
console.log(resultado.nome); // José

// Lembrando que "pessoa" como parametro da arrow function é o objeto atual que está sendo processado.
// Fruto de uma função callback que é passada como argumento para o find().
