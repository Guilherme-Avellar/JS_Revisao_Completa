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

