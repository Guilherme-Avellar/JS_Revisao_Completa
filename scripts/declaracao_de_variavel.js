

// Antes de se usar uma variavel em JS, vc deve declara-la. Usa-se a palavra-chave var (é possível declarar
// sem usar a palavra-chave, mas pode haver conflito com funções etc...)
// para todos os tipos, exemplo:
var i;
// (diferente do C, por exemplo, que tem uma palavra-chave para cada tipo)

// É possivel declarar varias variáveis com a mesma palavra-chave var
var i, j, k, guilherme;
// Tembém é possível declar varias vezes A MESMA variavel (com a palavra-chave var). Não ocorre erro por 
// declara-la mais de uma vez, que seria o comum (o erro) na maior parte das linguagens.

// É possível declara-la com sua inicialização, semelhante a outras linguagens:
var a = "abacate", b = "b", c = 14, guilherme = 10;

// Como em outras linguagens, é possivel declarar as variaveis em laços:
for(var i = 0, j = 1; i < 10; i ++, j--) {
    console.log(i);
    console.log(j);
}

// exemplo de variável global:
var variavel_global = 10;

// ela está definida em todo código, até mesmo nos escopos das funções:
console.log("\nvariavel global antes de chamar a função = " + variavel_global); // => 10

function alterar_variavel_global() {
    variavel_global = variavel_global - 1;
}

alterar_variavel_global();

console.log("\nvariavel global apos a chamada da função = " + variavel_global); // => 9

// Porém, caso haja uma declaração de uma variavel no escopo de uma função com o mesmo nome
// da variavel global, a variavel do escopo prevalecera e a variavel global é ocultada, até
// o término da função, exemplo:
function mesmo_nome() {
    var variavel_global = 5;
    console.log("\nvariavel dentro do escopo da função, com o mesmo nome = " + variavel_global);
}

mesmo_nome();

console.log("Término da função, valor da variavel_global = " + variavel_global);

// obs: se houver o hábito de não se usar o var para declarar a variavel, pode haver conflito
// quando se tem a intenção de declarar uma variável na função e ela já existir.
// Mais sobre escopo de variaveis => livro pg. 52 à 55 (the definitive guide).