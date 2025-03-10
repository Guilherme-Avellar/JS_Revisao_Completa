// Estratégias de manipulação de Objetos

const livro = {
    titulo: 'O Senhor dos Anéis',
    data: 1954,
    autor: {
        nome: 'J.R.R. Tolkien',
        nascimento: 1892
    }
}

const livroAtualizacao = {
    ...livro,
    subTiutlo: 'A Sociedade do Anel'
}

// Se cria outro objeto com as propriedades do objeto livro e 
// adiciona a propriedade subTitulo. Isso tudo para não alterar
// o objeto livro original

console.log(livroAtualizacao);

// Desestruturação com rest operator para remover propriedades:
const { titulo, ...resto } = livroAtualizacao;

// Coloca o titulo na variavel "titulo" e o resto das propriedades em um objeto,
// objeto "resto". Assim, o objeto livroAtualizacao não é alterado.

console.log(resto);

console.log(titulo);
