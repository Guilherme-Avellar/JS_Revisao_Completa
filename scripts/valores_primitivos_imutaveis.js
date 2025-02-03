

// undefined, null, booleanos, números e strings são valores primitivos e imutáveis
// exemplo:
var s = "hello";
s.toUpperCase(); // s.toUpperCase() é igual a HELLO, mas somente quando se usa este método se não:
console.log("s = ", s); // s = hello, mesmo usando o método para torna-lo maiúsculo

// porém, objetos como arryas e funções podem mudar, exemplo: 
var a = [1, 2, 3,];
a[0] = 0; // muda o valor da posição a[0]
a[3] = 4; // adiciona o valor 4 na posição que não existia a[3] - facilidades da linguagem interpretada -

// não se compara objetos por valor
// Dois objetos não são iguais, mesmo que tenham as mesmas propriedades e valores, exemplo:

var a = [], b = [];
a === b; // => False

// às vezes se chama os objetos de tipos de referência, que são diferentes dos tipos primitivos
// porque dois objetos seriam iguais se somente referenciassem a mesma coisa, exemplo:
var a = [];
var b = a;
b[0] = 7;
console.log("a[0] = ", a[0]);
a === b // => True


// então para comparar dois objetos difetentes, se a intenção for saber o conteudo, deve-se comparar
// o tamanho e cada conteudo posição por posição, usando estruturas de repetição. Ou para fazer
// qualquer operção do tipo, como clonar etc...