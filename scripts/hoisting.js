// Hoisting é uma mecânica específica do JS

// Essa mecânica faz com que variaveis ou funções declaradas, sejam
// lidas no inicio do programa, mesmo sendo declaradas linhas abaixo

console.log("printe de uma variavel declarada posteriormente: ", x); // x = undefined

var x = 1;

// Entre as variaveis, essa mecânica funciona apenas com o var
// e mesmo assim, o funcionamento é apenas para não dar erro,
// pois o valor mesmo não é lido.

console.log("printe de uma variavel declarada posteriormente: ", y); // erro

let y = 1;

// Com funções esta mecânica é mais útil
