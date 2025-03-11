function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}


// É possível exportar as funções com nomes diferentes
export { somar as somar2Numeros, subtrair as subtrair2Numeros, multiplicar as multiplicar2Numeros };

