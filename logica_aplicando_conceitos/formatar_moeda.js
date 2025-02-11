

// A manipulação de strings para numeros e vice-versa é algo trabalhoso:
string1 = "1#000asd00";
numero1 = Number(string1.replace(/\D/g, ""));
console.log(numero1);

// Há métodos nativos para formatação de moeda, como o toLocaleString()

const input1 = document.querySelector("input");

input1.oninput = () => {
    let valorSemLetras = input1.value.replace(/\D/g, "");

    // transformar em número e já adaptar para centavos
    valorSemLetras = Number(valorSemLetras) / 100;
    // precisa transformar em número para poder usar o toLocaleString
    // em formatarMoeda(). O toLocaleString é um método que não funciona
    // em strings.

    input1.value = formatarMoeda(valorSemLetras);
}

function formatarMoeda(valor) {
    valor = valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    return valor;
}


