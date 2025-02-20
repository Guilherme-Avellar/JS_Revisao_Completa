// Destruturing assignment (desestruturação)
// Permite extrair dados de arrays ou objetos e atribuí-los a variáveis 
// distintas

// exemplo com array:
const numeros = [1, 2, 3];

const [a, b, c] = numeros;
// As variaveis a, b e c foram declaradas com "const" e receberam os 
// valores do array numeros na mesma ordem. a = 1, b = 2, c = 3
console.log(a, b, c); // 1 2 3


// outro exemplo com array:
const frutas = ["Banana", "Maçã", "Uva"];

let [banana, maca, uva] = frutas;
console.log(banana, maca, uva); // Banana Maçã Uva

// É possível pegar apenas o primeiro valor:
let [primeiraFruta] = frutas;

// É possível ignorar valores:
// ignorando o primeiro e o segundo valor
let [ , , fruta3] = frutas;
console.log(fruta3); // Uva
// É só separar por vírgula, e deixar vazio o lugar da variável que você 
// quer ignorar. Nesse caso eu coloquei um espaço entre as vírgulas para 
// ficar mais claro.



