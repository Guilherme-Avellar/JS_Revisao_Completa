
/*
    O método reduce() é utilizado para reduzir um array a um único valor.
    Pode ser qualquer operação matemática, para resumir todos os valores
    do array a um único valor.
    Como somar todos os valores, multiplicar, dividir, etc.
    O método recebe 4 parâmetros, sendo o último opcional, são eles:
    - Função de callback
    - Valor inicial (opcional)
    - Indice atual (opcional)
    - Array original (opcional)
    O método retorna um único valor.


    parametros:
        - Array original (values)
        - Acumulador (accumulator)
        - Valor de interação (currentValue)
        - Valor inicial (0)
        - Indece da interação atual, opcional (index)
*/

const valores = [1, 2, 3, 5, 8];

const soma = valores.reduce((accumulator, currentValue, index) => {

    console.log("Acumulador: ", accumulator);
    console.log("Current Value: ", currentValue);
    console.log("Index: ", index);
    console.log("Soma: ", accumulator + currentValue);
    console.log("--------------\n\n");

    // Pode retornar qualquer operação, não necessariamente uma soma
    return accumulator + currentValue;

}, 0)
// esse zero é o valor inicial que se soma. Começa somando a partir de zero.

console.log("soma com valor inicial 0: ", soma);

const soma2 = valores.reduce((accumulator, currentValue, index) => {
    /*
    console.log("Acumulador: ", accumulator);
    console.log("Current Value: ", currentValue);
    console.log("Index: ", index);
    console.log("Soma: ", accumulator + currentValue);
    console.log("--------------\n\n");
    */

    return accumulator + currentValue;

}, 10)
// Agora começará somando com 10 já adicionados

console.log("soma com valor inicial 10: ", soma2);


/*
    obs: accumulator é o valor que é somado depois de cada interação,
    na própria interação ele ainda vai estar com o valor anterior.

    currentValue é o valor do elemento do array na interação atual.

    index é o índice do elemento atual.
*/

