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

// Rest operator para remover propriedades:
const { titulo, ...resto } = livroAtualizacao;

// Remove a propriedade titulo e retorna o restante das propriedades
// para o objeto resto

console.log(resto);
