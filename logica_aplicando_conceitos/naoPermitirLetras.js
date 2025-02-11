// Para esse problema, o usual é aplicar regex em conjunto 
// com métodos de strings:

// Captura um input do html (testes.html)
const input1 = document.querySelector("input");
// poderia ser pego pelo id "#idqualquer", mas dessa forma é mais didatico

// oninput é um evento que ocorre quando o valor de um elemento <input> é alterado.
// Ele é acionado até quando se apaga um caractere do input.
input1.oninput = () => {
    //console.log(input1.value);

    // código regex /\D/g que captura caracteres não numéricos
    let valorSemLetras = input1.value.replace(/\D/g, "");
    // ou seja, pega todo caracter não número e substitui por vazio, "apaga"

    // transforma a string em número
    valorSemLetras = Number(valorSemLetras);

    // atribui a variavel ao elemento pego no html
    input1.value = valorSemLetras;

}

