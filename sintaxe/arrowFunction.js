// Arrow function são funções anônimas, mas com uma sintaxe mais curta e direta.

const soma = (a, b) => a + b;

console.log(soma(7, 7));
console.log(soma(5, 6));

// Lembrando que, uma vez que algo seja atribuido a uma const, ela será imutável. Neste caso,
// o valor de "soma" é essa expressão. Não podendo se atribuir outro tipo de expressão ou valor
// a esta const. Ela sempre será o resultado de a + b, porém a e b são variáveis.

// exemplo mais explícito do que ocorreu:
function soma2(a, b) {
    return a + b;
}

console.log(soma2(7, 7));
console.log(soma2(5, 6));



// Para arrow functions com mais de 1 linha de código será obrigatório o uso de chaves
const multiplicarSoma = (a, b) => {
    let soma = a + b;
    return soma * soma;
}

console.log(multiplicarSoma(4, 5));
