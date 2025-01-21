// Função anônima é uma função que não tem nome


const nome_qualquer = function(){
    return 10 + 20;
}

console.log("Chamando SEM parenteses: ", nome_qualquer);
/* CONSOLE:
Chamando SEM parenteses:  ƒ (){
    return 10 + 20;
}
*/

console.log("Chamando COM parenteses: ", nome_qualquer()); // 30
