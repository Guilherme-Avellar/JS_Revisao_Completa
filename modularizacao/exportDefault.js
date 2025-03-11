/*
    export default é a exportação padrão de um arquivo, ou seja
    só pode ter um export por arquivo, caso seja usado a palavra-chave
    export default. A não ser que seja importado de uma forma diferente
    Não precisa de chaves na hora de importar em outro arquivo

    import nomeQualquer from './exportDefault.js';

    Para mais de um arquivo:

    import nomeQualquer, { função, função2, etc } from './exportDefault.js';

    esse nomeQualquer é o nome que você quiser dar para a função exportada
*/

// somar2 se torna a função padrão do arquivo
export default function somar2(a, b) {
    return a + b;
}

export function subtrair2(a, b) {
    return a - b;
}

export function multiplicar2(a, b) {
    return a * b;
}

