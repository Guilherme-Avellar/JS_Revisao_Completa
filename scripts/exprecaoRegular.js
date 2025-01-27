// Espressão Regular do JS (regex)
// podem ser feitos testes em regexr.com

const input1 = document.querySelector("input");

const formulario = document.querySelector("form");

/*
input1.addEventListener("input", () => {

    const valorInput = input1.value;

    const regex = /\D+/g; // \D+ significa que vai pegar tudo que não for número

    //console.log(valorInput.match(regex));
    // A função match() retorna um array com os valores encontrados. Verifica os valores.

    // Para testas o input
    //const isValid = regex.test(valorInput);
    // A função test() retorna um booleano, se encontrar o valor retorna true, se não false.
    //console.log(isValid);
    // Nesse caso, mesmo que haja números no input mas ao mesmo tempo haja letras, o retorno será true,
    // pois o regex está procurando por letras. Retorna false se não houver letras (não dígitos).

})

*/

formulario.addEventListener("submit", (event) => {

    event.preventDefault();
    //const valorInput = input1.value;
    //console.log(valorInput);
    // Para mostrar o funcionamento

    const regex = /\D+/g;

    const valorInputAut = input1.value.replace(regex, "Substitui por qualquer coisa");
    // replace() mais uma função (método) da String

    // Sujestão de input: teste 123 abc 123 abc
    console.log(valorInputAut);
    // Substitui o que tem no regex, ou seja, caracteres não dígitos.

    // Pode usar essa lógica pra apagar os caracteres não dígitos, exemplo:
    // const valorInputAut = input1.value.replace(regex, "");
    // string vazia no segundo argumento

    const valor2 = input1.value;
    // lembrando que o test() retorna um booleano
    if(regex.test(valor2)) {
        alert("Valor encontrado");
    }
})



