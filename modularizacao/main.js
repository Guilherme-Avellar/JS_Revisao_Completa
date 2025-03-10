// Varios arquivos se comunicando

// Para importar no html:
// <script type="module" src="modularizacao/main.js"></script>

// Precisa do type="module" para funcionar

// Para importar outros arquivos js:
import { somar, subtrair, multiplicar } from './calcular.js';

// Foram importadas as funções com o mesmo nome que foram exportadas
// de calcular.js

// Poderia importar tudo do arquivo também:
// import * as calc from './calcular.js';

// mas aí na hora de usar a função teria que usar como se fosse um objeto
// do nome dado ao import "calc", exemplo:
// calc.somar(2, 3);

console.log('Carregou o main.js');

console.log("somar 2 e 3 =", somar(2, 3));
console.log("subtrair 2 e 3 =", subtrair(2, 3));
console.log("multiplicar 2 e 3 =", multiplicar(2, 3));

