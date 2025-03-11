// Varios arquivos se comunicando

// Para importar no html:
// <script type="module" src="modularizacao/main.js"></script>

// Precisa do type="module" para funcionar no html

// Para importar outros arquivos js:
import { somar, subtrair, multiplicar } from './calcular.js';

// Foram importadas as funções com o mesmo nome que foram exportadas
// de calcular.js

// Poderia importar tudo do arquivo também:
// import * as calc from './calcular.js';

// mas aí na hora de usar a função teria que usar como se fosse um objeto
// do nome dado ao import: "calc", exemplo:
// calc.somar(2, 3);

console.log('Carregou o main.js');

console.log("somar 2 e 3 =", somar(2, 3));
console.log("subtrair 2 e 3 =", subtrair(2, 3));
console.log("multiplicar 2 e 3 =", multiplicar(2, 3));


// outra forma de importar (com outro arquivo)

// nomeQualquer é somar2, que é a função padrão, default da essa liberdade de nome
import nomeQualquer, {multiplicar2, subtrair2} from './exportDefault.js';

console.log("somar2: 4 + 3 =", nomeQualquer(4, 3));
console.log("subtrair2: 4 - 3 =", subtrair2(4, 3));
console.log("multiplicar2: 4 * 3 =", multiplicar2(4, 3));

// então quando usamos chaves {} quer dizer que estamos importando funções
// que não foram exportadas como padrão, default.


// Importando funções com outros nomes exportados
import { somar2Numeros, subtrair2Numeros, multiplicar2Numeros } from './renomearExportacao.js';
console.log("somar2Numeros: 5 + 3 =", somar2Numeros(5, 3));
console.log("subtrair2Numeros: 5 - 3 =", subtrair2Numeros(5, 3));
console.log("multiplicar2Numeros: 5 * 3 =", multiplicar2Numeros(5, 3));

// É possível renomear na própria importação também, usando o as, exemplo:
// import { somar2Numeros as qualquerCoisa2 } from './renomearExportacao.js';

