// Hoisting é uma mecânica específica do JS

// Essa mecânica faz com que variaveis ou funções declaradas, sejam
// lidas no inicio do programa, mesmo sendo declaradas linhas abaixo

console.log("printe de uma variavel declarada posteriormente: ", x); // x = undefined
var x = 1;

//exemplo 2:
if(true) {
    variavelVar = 600
}
var variavelVar;
console.log(variavel); // 600

// Repare que está sendo declarada depois da atribuição da variavelVar

// Entre as variaveis, essa mecânica funciona apenas com o var
// e mesmo assim, o funcionamento é apenas para não dar erro,
// pois o valor mesmo, não é lido antes da declaração, mas pode receber valores.

console.log("print de uma variavel declarada posteriormente: ", y); // erro

let y = 1;

// Com funções esta mecânica é mais útil


// exemplo com funções:

console.log(somar(1, 2)); // 3
function somar(a, b) {
    return a + b;
}

// função declarada depois do seu uso. Algo que não seria possível em C por exemplo
