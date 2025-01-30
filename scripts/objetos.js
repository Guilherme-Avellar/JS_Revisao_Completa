// Analogia: Objetos são semelhantes a uma Struct em C, porém, muito mais manipuláveis e poderosos.



// Criando um objeto vazio:
const objVazio = {};
console.log(objVazio); // {}
console.log(typeof objVazio); // object

// Criando um objeto com propriedades:
const usuario = {
    nome: "João",
    idade: 30,
    email: "xxxx@email.com",
}

// Repare que as atribuições das propriedades dentro do objeto são feitas com o operador de dois pontos (:),
// além de que, cada propriedade é separada por vírgula.

// Criando um objeto com a estrutura de objeto aninhado:
const usuario2 = {
    idade: 30,
    email: "xxxx@email.com",

    nome: {
        primeiro_nome: "João",
        sobrenome: "Silva",
    },
    
    endereco: {
        rua: "Rua 1",
        numero: 123,
        cidade: "Cidade A",
    },
}

// Um objeto dentro do outro é chamado de estrutura de objeto aninhado.
// endereço e nome seriam chamados de propriedades compostas, mas são objetos detro de outro


// Criando um objeto com métodos:
const usuario3 = {
    idade: 30,
    email: "xxxx@email.com",

    nome: {
        primeiro_nome: "João",
        sobrenome: "Silva",
    },
    
    endereco: {
        rua: "Rua 1",
        numero: 123,
        cidade: "Cidade A",
    },

    mensagem: () => {
        console.log("Olá, eu sou o João!");
    }

}


// Acessando propriedades de um objeto:
console.log(usuario.nome); // João
console.log(usuario2.nome.primeiro_nome); // João
// Acessando métodos de um objeto:
usuario3.mensagem(); // Olá, eu sou o João!
// nesse caso o console.log já está dentro do método

// Notação alternativa para acessar propriedades de um objeto:
console.log(usuario["nome"]); // João
console.log(usuario2["nome"]["primeiro_nome"]); // João
// Notação alternativa para acessar métodos de um objeto:   
usuario3["mensagem"](); // Olá, eu sou o João!