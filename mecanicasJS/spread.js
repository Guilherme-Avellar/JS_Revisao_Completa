// Spread operator ...
// Permite que um objeto iterável, como um array ou string, 
// seja expandido em locais onde zero ou mais argumentos 
// (para chamadas de função) ou elementos (para arrays literais) 
// são esperados.

// Exemplo 1
let numeros = [1, 2, 3, 5, 8];
console.log(numeros); // [1, 2, 3, 5, 8]
console.log(...numeros); // 1 2 3 5 8

// Exemplo 2
const arrayBlocos = [
    {
        cargo: "Desenvolvedor Front-End",
        salario: 8000
    },
    {
        cargo: "Analista de Sistemas",
        salario: 5000
    }
]

console.log(arrayBlocos);
console.log(...arrayBlocos);

