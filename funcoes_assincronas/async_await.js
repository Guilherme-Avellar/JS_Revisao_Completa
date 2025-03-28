

// Reaproveitando o código de promise.js
function asyncFunction () {
    return new Promise((resolve, reject) => {

        // para simular uma ação que terá um tempo de espera
        setTimeout(() => {
            // se for igual a false, lançará uma exceção com a mensagem do reject
            const isSuccess = true;

            if (isSuccess) {
                resolve("Ação concluída com sucesso!");
            } else {
                reject("Ação falhou.");
            }
        }, 3000); 
        // 3 segundos de espera
    })
}


// Para fazer uma função assíncrona, usamos a palavra-chave async antes da
// função.
async function buscar() {
    // Só dá para usar o await dentro de uma função assíncrona, ou seja, uma
    // função que tem a palavra-chave async antes do nome da função.

    // Para esperar uma promise ser resolvida antes de se pasar para a
    // próxima linha de código, usamos a palavra-chave await antes da promise
    const resposta = await asyncFunction();
    // obs: essa função retorna uma promise, então o JS trata ela como uma
    // promise

    // Antes imprimia a promise em pending, pelo tempo de espera. Agora, já
    // imprime o resultado da promise resolvida, pois o JS está esperando ela
    // ser resolvida para executar a próxima linha de código, nesse caso o
    // console.log
    console.log(resposta);
}

buscar();
// Antes se imprimia a promise em pending, pelo tempo de espera. Agora, já
// imprime o resultado da promise resolvida


// Caso queira usar a notação de arrow function com o async, se faz desta forma:
/*
const buscar = async () => {
    //... código
}
*/

// poderia fazer o tratamento de exceções dentro da função assincrona também

/*
async function buscar () {
    try {
        const resposta = await asyncFunction();
        console.log("Sucesso: ", resposta);
    } catch (erro) {
        console.log("Erro: ", erro);
    } finally {
        console.log("Fim da execução.");
    }
}
*/
