// Tratamentos de erro em JS. 
// Há também em outras linguagens de programação

try {

    // Tenta executar o que estaria aqui, caso contrário, vai para o catch

} catch (variavel_quaquer) {

    // "variavel_qualquer" é o nome da variável que armazenará o erro 
    // (a mensagem que normalmente aparece no console)

    // Geralmente, em vez de "variavel_qualquer" é usado "error"

} finally {

    // O finally é executado sempre, independente se houve erro ou não

    // Geralmente é usado para fechar um banco de dados ou um arquivo que 
    // foi aberto ou se tentou abrir, por exemplo.

    // É opcional o uso do fainally
}

