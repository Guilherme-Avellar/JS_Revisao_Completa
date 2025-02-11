/*  
    Palavra-chave throw:

    A função da palavra-chave throw em JavaScript é lançar uma exceção
    manualmente. Isso interrompe a execução normal do código e transfere
    o controle para o bloco catch mais próximo (se existir) para tratar
    o erro. Se não houver um bloco catch, o programa para com um erro.
    Possui um comportamento muito parecido com o return, quado é executado
    ele pula direto para o bloco de catch, ignorando tudo até chegar no 
    catch.

    exemplo de uso:

    throw new Error("Algo deu errado!");
*/

// ("tudo é um objeto em JS")
let obj = [];

try {

    //obj.execute()
/*
    // Esse if verifica se existe 17 dentro de obj, mas com resultado negado (!)
    if(!obj.includes(17)) {
        // Passa a mensagem que se quer para a exibição do erro
        throw new Error("Mensagem de erro: 17 não está em obj");
        // Error é uma classe. É a classe base para todos os erros em JS,
        // diferentemente de RangeError, ReferenceError, etc.

    }
*/
    var index = 300;

    if(index > 99) {
        throw new RangeError("Número está fora do intervalo");
    }

} catch(error) {

    // Verifica se error é uma instância da classe TypeError
    if (error instanceof TypeError) {
        console.log("Não existe no objeto obj");
    } else if (error instanceof RangeError) { // se o erro for do tipo RangeError
        console.log("Número fora do intervalo");
    } else { // se não for nenhum dos dois
        console.log("Erro desconhecido");
    }

    //console.log(error);

    // para pegar so a mensagem de erro
    console.log(error.message);
}
