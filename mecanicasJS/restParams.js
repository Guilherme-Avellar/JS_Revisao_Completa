// São parametros infinitos que são passados para uma função (...)
// Algo que outras linguagens possuem de forma parecida.

// pode ser qualquer nome, mas é comum usar o nome "rest" ou "args"
function somar(...rest) {
    console.log(rest); // [1, 2, 3, 5, 8]
    console.log(...rest); // 1 2 3 5 8

    // se comporta como array
    let soma = 0;
    for(let i = 0; i < rest.length; i++) {
        soma += rest[i];
    }

    console.log("A soma é: ", soma);
}

somar(1, 2, 3, 5, 8) // A soma é:  19

somar(1, 2, 3) // A soma é:  6

