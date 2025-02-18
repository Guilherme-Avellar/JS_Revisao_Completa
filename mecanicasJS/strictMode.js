/*
    O strict mode (modo estrito): Quando ativado, erros que eram silenciosos
    passam a gerar exceções. 
    O JS é uma linguagem muito flexível, e por isso, há alguns erros que são
    aceitos, mas que a longo prazo podem gerar problemas.

    Para isso serve o strict mode, para que os erros sejam identificados e
    corrigidos.
*/

// exemplo da flexibilidade do JS:

function mostrarNome() {
    nome = "Lucas";
    console.log(nome);
}
mostrarNome(); // Lucas

// O erro é que a variável "nome" não foi declarada, mas mesmo assim o JS
// aceita e executa o código.

console.log(window.nome); // Lucas
// a variável nome foi criada no escopo global, e não no escopo da função.

// Como o strict mode interfere:

function mostrarNome2() {
    "use strict";
    nome2 = "Lucas";
    console.log(nome);
}
mostrarNome(); // ReferenceError: nome2 is not defined

// "use strict" pode ser usado em diferentes escopos, até mesmo no global.



// Há erros mais mais graves que o JS aceita, como:

// "use strict";
class Estudante {
    get nota() {
        return 9;
    }
}

let estudante = new Estudante();

estudante.nota = 10;
// O erro é que a propriedade nota é apenas leitura, e não pode ser alterada.
// Ela nem mesmo é guardada em algo, é apenas uma função que retorna um valor.


// Outro exemplo de erro silencioso:
delete window.document;
// Tentar excluir a DOM é um TypeError, mas sem o strict mode isso não gera erro.
// Há objetos que não podem ser deletados


// outro exemplo:
function teste(a, a, b) {
    return a + a + b;
}
// O erro é que o parâmetro "a" foi declarado duas vezes.
// Sem o strict mode isso passa
console.log("Resultado: " + teste(1, 2, 3)); // 7
// O primeiro parâmetro é sobrescrito pelo segundo. Então o valor do segundo "a" 
// que conta.

// Esse é o nível de flexibilidade do JS.
