// CallBack function é quando uma função é passada como argumento para outra função.

// Pode ser útil para operações matemáticas, etc

/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @param {callBack} operacao 
 * @returns {Number} resultado de uma operação matemática
 */
function calcular(a, b, operacao) {
    return operacao(a, b);
}

// "operação" pode assumir o papel de qualquer função que será passada como argumento.
// Caso não seja passada uma função, ocorrerá um erro, pois na linha 13, "operacao" é
// usada em forma de função:
/*
VM176:13 Uncaught TypeError: operacao is not a function
    at calcular (<anonymous>:13:12)
    at <anonymous>:30:53
*/

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

console.log("Resultado de 2 e 7 com a função soma", calcular(2, 7, soma)); // 9
console.log("Resultado de 2 e 7 com a função multiplicação", calcular(2, 7, multiplicacao)); // 14
console.log("Resultado de 2 e 7 com a função subtração", calcular(2, 7, subtracao)); // -5


// Exemplo com arrow function

console.log("Resultado de 2 e 7 com a função exponencial (arrow function)", calcular(2, 7, (a, b) => a**b)); // 128

