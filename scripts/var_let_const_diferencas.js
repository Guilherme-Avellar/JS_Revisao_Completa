// Qual a diferença de let, var e const? Todas as 3 servem para declarar variaveis

function exemplo() {
    var x = 1;
    if (true) {
        var x = 2; // mesma variável, escopo de função
        console.log(x); // 2
    }
    console.log(x); // 2

    let y = 2;
    if (true) {
        let y = 2; // variável diferente, escopo de bloco
        console.log(y); // 2
    }
    console.log(y); // 1

    const z = 3;
    // z = 2; // erro: não pode reatribuir uma constante
    console.log(z); // 3
    // Não é global como o var, mas também não é escopo de bloco como o let
    if (true) {
        console.log(z); // 3, se fosse let daria erro
    }
    console.log(z); // 3
}

exemplo();