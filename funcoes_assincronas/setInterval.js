// Executa uma função repetidamente, com um intervalo de tempo fixo 
// entre cada chamada
// setInterval(função, tempo)


/*
setInterval(() => {
    console.log("Essa mensagem vai aparecer a cada 5 segundos.");
}, 5000)
*/

// um modelo mais trabalhado

let contador = 10;

// Atribui o setInterval a uma constante para poder parar a execução no futuro
const intervalo =  setInterval(() => {
    console.log("Exemplo contagem regressiva:", contador);
    contador--;

    if(contador == 0) {
        console.log("Fim!");
        
        // para a execução do setInterval
        clearInterval(intervalo);
    }
}, 1500);

// 1500 milisegundos = 1,5 segundos

