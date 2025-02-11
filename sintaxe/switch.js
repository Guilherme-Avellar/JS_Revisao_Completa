

// A função Nuber() faz a verificação de que o imput seja um número
// por exemplo, caso seja digitado uma string o valor armazenado na
// variavel sera NaN, ja visto no livro "O guia definitivo"
var combo = Number(prompt("Qual o combo desejado?"));

switch(combo){
    case "1":
        alert("Hamburguer, Refri e Fritas. R$ 20,00");
        break;
    case "2":
        alert("Chesseburger, Refri e Salada. R$ 22,00");
        break;
    case "3":
        alert("Misto Quente, Suco e Salada. R$ 15,00");
        break;
    default:
        alert("Opção inválida");
}

// default é a condição que é executada quando nenhum dos casos é atendido
