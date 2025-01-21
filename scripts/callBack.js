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
