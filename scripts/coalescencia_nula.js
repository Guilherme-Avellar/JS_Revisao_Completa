// A Coalescência Nula (??) é um operador do JavaScript que retorna o primeiro
// operando não nulo (null) e não indefinido (undefined).

// Ou seja, se o primeiro operando (lado esquerdo) for nulo ou indefinido, o
// operador retorna o segundo operando (lado direito). Caso contrário, retorna o
// primeiro operando.

// Exemplo:
const valorPadrao = 'Valor padrão';
const valorNulo = null;
const valorIndefinido = undefined;
const valorVazio = '';

const resultado1 = valorNulo ?? valorPadrao; // 'Valor padrão'
const resultado2 = valorIndefinido ?? valorPadrao; // 'Valor padrão'
const resultado3 = valorVazio ?? valorPadrao; // ''

console.log(resultado1); // 'Valor padrão'
console.log(resultado2); // 'Valor padrão'
console.log(resultado3); // ''
const valorZero = 0;
const valorFalse = false;

const resultado4 = valorZero ?? valorPadrao; // 0
const resultado5 = valorFalse ?? valorPadrao; // false

console.log(resultado4); // 0
console.log(resultado5); // false


// Exemplo mais real:

const usuario = {
    nome: 'Lucas',
    foto: undefined, // O usuário ainda não definiu sua foto de perfil
}

console.log(usuario.foto ?? 'Foto não definida'); // 'Foto não definida'
