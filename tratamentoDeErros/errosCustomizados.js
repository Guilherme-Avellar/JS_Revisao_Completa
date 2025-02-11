

// Cria uma classe qualquer que depois será usada como erro
class ErrorCustomizado {
    constructor(mensagem) {
        this.mensagem = "Mensagem de error customizada: " + mensagem;
    }
}

try {

    // O throw faz a execução do código parar e avança para o bloco catch
    throw new ErrorCustomizado("mensagem cutumizada passada como argumento");
    // ao mesmo tempo foi criado um objeto do tipo ErrorCustomizado, que é
    // lançado pelo throw, e capturado pelo catch como "error"

} catch (error) {
    if(error instanceof ErrorCustomizado) {
        console.log(error.mensagem);
    } else {
        console.log(error);
    }
}



