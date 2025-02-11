// Qual a diferença de let, var e const? Todas as 3 servem para declarar variaveis

function exemplo() {

    // exemplo var --------------------------------------------------------------------------------
    var x = 1;
    if (true) {
        var x = 2; // mesma variável, escopo de função
        console.log(x); // 2
    }
    console.log(x); // 2
    // O var é global vai até além deste exemplo. Todo o arquivo pode usa-lo


    // exemplo let --------------------------------------------------------------------------------
    let y = 2;
    if (true) {
        let y = 50; // variável diferente, duas variaveis y
        console.log(y); // 50
    }
    console.log(y); // 1
    // Porém, isso acontece pois o let foi declarado novamente no bloco,
    // mas caso não fosse, o let pegaria o valor do escopo, ou seja, 2.
    // E essa é a única forma de declarar o mesmo nome de variável usando
    // let
    // exemplo de escopo de bloco let:
    let w = 2;
    if (true) {
        console.log(w); // 2, não da erro, mesma variavel
    }
    console.log(w); // 2


    // exemplo const --------------------------------------------------------------------------------
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