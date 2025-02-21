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


// Desestruturação de objetos -----------------------------------------------------


const objProduto = {
    nome: "Teclado",
    preco: 100,
    marca: "Logitech"
}

// Desestruturando:
const { nome, preco, marca } = objProduto;

console.log("valores do obj:", nome, preco, marca);

/*
obs: Precisa ser o mesmo nome da propriedade do objeto, se não, não sera definido:
const { nome, preco1, marca1 } = objProduto;

console.log("valores do obj:", nome, preco1, marca1); // Teclado undefined undefined
*/
// Para o nome da variavel ser diferente da propriedade do obj:
const { nome: n, preco: p, marca: m } = objProduto;
console.log(n, p, m); // Teclado 100 Logitech



// Desestruturando os parametros de uma função:
function mostrarCasa({ rua, numero, cidade }) {
    console.log(rua, numero, cidade);
}

// chamando a função com a desestruturação:
mostrarCasa({ rua: "Rua das Flores", numero: 123, cidade: "São Paulo" });
// Rua das Flores 123 São Paulo

// Isso elimina o problema de ter que se preocupar com a ordem dos parâmetros:
mostrarCasa({ numero: 123, cidade: "São Paulo", rua: "Rua das Flores" });

// Com essa solução, a ordem pode ser passada de qualquer forma

