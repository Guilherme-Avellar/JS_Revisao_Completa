// Deep Freeze é quando se usa uma técnica que cogela objetos aninhados

const livro = {
    titulo: 'O Senhor dos Anéis',
    data: 1954,
    autor: {
        nome: 'J.R.R. Tolkien',
        nascimento: 1892
    }
}

// É uma solução com tecnica recursiva, para congelar objetos internos:
function deepFreeze(obj) {

    // Pega todas as propriedades do objeto e coloca em um array
    const propriedades = Reflect.ownKeys(obj);

    // for of para percorrer o array interavel "propriedades"
    for(const propriedade of propriedades) {

        const valor = obj[propriedade];

        // Verifica se o valor é um objeto ou uma função, e se ele não é nulo
        if((valor && typeof valor === "object") || typeof valor === "function") {
            // se for um objeto, chama de novo a função porém, com o objeto interno
            deepFreeze(valor);
        }
        // A função para quando chegar no ultimo objeto interno
    }
    
    console.log(obj);
    return Object.freeze(obj);
}

deepFreeze(livro);

// Tentando alterar o objeto autor e livro
livro.autor.nome = 'Jorge R.R. Tolkien';
console.log(livro.autor.nome); // J.R.R. Tolkien

livro.titulo = 'O Hobbit';
console.log(livro.titulo); // O Senhor dos Anéis



