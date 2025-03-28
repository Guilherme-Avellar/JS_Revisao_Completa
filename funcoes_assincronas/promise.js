// Uma Promise é um objeto que representa a eventual conclusão
// (ou falha) de uma operação assíncrona e seu valor resultante

// Como uma consulta em um banco de dados, etc

// Pode ser um processo que demore para ser concluído
// e que não queremos que trave a execução do código


// Exemplo simmples:

let promise = new Promise((resolve, reject) => {
    
    // Simulando uma operação assíncrona
    let success = true;

    if (success) {
        resolve("Operação bem-sucedida!");
    } else {
        reject("Operação falhou.");
    }
});


// Outro exemplo de simulação de um uso de promise

function asyncFunction () {
    return new Promise((resolve, reject) => {

        // para simular uma ação que terá um tempo de espera
        setTimeout(() => {
            const isSuccess = false;

            if (isSuccess) {
                resolve("Ação concluída com sucesso!");
            } else {
                reject("Ação falhou.");
            }
        }, 3000); 
        // 3 segundos de espera
    })
}

// imprime a promise em pending, pelo tempo de espera
//console.log(asyncFunction())

// A linha 45 está comentada pois vai lançar uma exceção, caso a
// condição seja falsa, pois usamos não esperamos a promise ser
// resolvida para usarmos, mais na frente


// Como o retorno da função é uma promise, podemos usar o .then(), 
// o .catch(), entre outros, na função, que são métodos nativos de
// um objeto promise o JS já trata como se fosse uma promise

// O método then() é usado quando a promise é resolvida com sucesso
// O método catch() é usado quando a promise falha, para tratar os
// erros

// exemplo de uso do .then() e .catch() em uma função com retorno de
// uma promise

asyncFunction().then((resposta) => {
    console.log("Sucesso: ", resposta);
}).catch((erro) => {
    console.log("Erro: ", erro);
}).finally(() => {
    console.log("fim da execução da promise");
});

//vários métodos encadeados
