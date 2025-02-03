

var variavel = "como funciona a quebra de texto em strings:" + 
" deve-se concatenar." +
" e não usar enter, porque não ira interpretar" +
`. Com crase é possivel usar o enter, pois irá quebrar uma linha no 
print. Se não quiser que quebre a linha, é melhor ir concatenando`;
console.log(variavel);

// Exibir o texto em caixa alta (maiusculo)
console.log(variavel.toUpperCase());

// Exibir o texto em caixa baixa (minusculo)
console.log(variavel.toLowerCase());

// toUpperCase() e o toLowerCase() são métodos da String do JS
// Há muitos outros métodos e propriedades para manipulação de strings:

let variavelCurta = "texto curto";

console.log(variavelCurta.length); // retorna o tamanho da string, no caso 11
// length é uma propriedade, repare que não tem os parenteses ()

console.log(variavelCurta.replace("curto", "longo")); // substitui a palavra curto por longo
// Mas não altera a variavel original, apenas exibe o resultado

console.log(variavelCurta.slice(0, 5)); // retorna os caracteres da posição 0 a 5, "texto"
// slice é um método que retorna uma parte da string, sem alterar a original
console.log(variavelCurta.slice(-5)); // retorna os 5 ultimos caracteres, "curto"

// Para retirar espaços em branco no inicio e no final da string, use o método trim()
let variavelComEspaco = "     texto qualquer     ";
console.log(variavelComEspaco.trim());
// retorna "texto qualquer" em vez de "     texto qualquer     "


console.log(variavelCurta.padEnd(15, "#"))
// padEnd() preenche a string no final com o caracter especificado
// até atingir o tamanho desejado

console.log(variavelCurta.padStart(15, "#"))
// padStart() preenche a string no inicio com o caracter especificado 
// até atingir o tamanho desejado


// Para separar strings:
let variavelComVirgula = "texto1; texto2; texto3";
console.log(variavelComVirgula.split(";")); // retorna ["texto1", " texto2", " texto3"]
// split() separa a string em partes, usando o caracter especificado como separador

// Para juntar strings:
let array = variavelComVirgula.split(";"); // ["texto1", " texto2", " texto3"]
console.log(array.join(";")); // retorna "texto1,  texto2,  texto3"
// join() junta as partes do array em uma string, usando o caracter especificado como separador
// se não especificar, ele junta com virgula (,) por padrão

// Para buscar a posição de uma palavra na string:
console.log(variavelCurta.indexOf("curto")); // retorna 6
// indexOf() retorna a posição do primeiro caracter da string (onde começa)
// se não encontrar a string passada, retorna -1

// Para verificar se uma string existe dentro de outra:
console.log(variavelCurta.includes("curto")); // retorna true
// includes() retorna true se encontrar a string passada, e false se não encontrar

// É possível usar combinações, exemplo:
console.log(variavel.toLowerCase().includes("se")) // true
// Na variavel, "se" aparece como "Se", mas como usamos o 
// toLowerCase(), ele passa o texto todo para minusculo, para
// depois verificar.



