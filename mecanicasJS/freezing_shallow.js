// Shallow freezing é como se fosse um encapsulamento. Um cogelamento raso
// onde apenas o objeto principal é congelado, mas os objetos internos não.
// Para isso usamos o Object.freeze(nomeDoObj)


const livro = {
    titulo: 'O Senhor dos Anéis',
    data: 1954,
    autor: {
        nome: 'J.R.R. Tolkien',
        nascimento: 1892
    }
}

// freezing raso
Object.freeze(livro);

// Sem o Object.freeze(livro) seria possível alterar propriedades do objeto livro
livro.titulo = 'O Hobbit';
console.log(livro.titulo); // O Senhor dos Anéis

// Mas o Object.freeze() não impede a alteração de propriedades de objetos internos:
livro.autor.nome = 'Jorge R.R. Tolkien';
console.log(livro.autor.nome); // Jorge R.R. Tolkien

