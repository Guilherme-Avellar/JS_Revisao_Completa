
// selecionando a tag <select>
const categoria = document.getElementById("categoria");
const container1 = document.getElementById("container1");


// toda vez que mudar o valor do dropdown será disparado o evento onchange
categoria.onchange = (event) => {
    
    const dadosNovaTag = {
        id: new Date().getTime(),
        categoria_value: categoria.value,
        categoria_texto: categoria.options[categoria.selectedIndex].text
        // .selectedIndex retorna o índice da opção selecionada dentro do <select>.
    }

    console.log(dadosNovaTag);
    // executa a função jogando o objeto que acabou de ser criado
    criarNovaTag(dadosNovaTag);
}

// Esse objeto foi feito no intuito de reunir dados do html para depois serem usados
// para criar uma nova tag no html.
// Este exemplo não precisava ser feito dessa forma, pois não tem muitos dados a serem
// reunidos, mas fica de exemplo para o caso que se precise reunir dados de diversas
// tags para criar uma única nova tag.


// função para criar a nova tag
function criarNovaTag(objComDados) {

    // exclui a anterior que foi adicionada
    if(document.getElementById("tagAdicionada__")){
        document.getElementById("tagAdicionada__").remove();
    }
    
    // A ideia é colocar a imagem dentro de uma tag div
    const tagNova = document.createElement("div");
    const imagem = document.createElement("img");

    // pega o value do objeto que foi passado para essa função, que tem o mesmo
    // nome que o arquivo svg para facilitar:
    imagem.setAttribute("src", `img/${objComDados.categoria_value}.svg`);

    imagem.setAttribute("alt", objComDados.categoria_texto);
    imagem.setAttribute("class", "img50");

    tagNova.setAttribute("id", "tagAdicionada__");

    // colocando a tag dentro da div, e a div no html
    tagNova.append(imagem);
    container1.append(tagNova);

}

