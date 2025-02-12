
// É a representação de um documento HTML em forma de objeto, que pode ser manipulado por scripts.

// document seria uma espécie de "variavel especial", que já está configurada no javascript
console.log(document);

// É usado para manipular o DOM. Com comandos como:
//      document.getElementById("id_do_elemento");
//      document.getElementsByClassName("classe_do_elemento");

// Tome cuidado com .ClassName pois ele retorna um array de elementos, e não um elemento único.
// Para retornar apenas um você precisa especificar o índice de onde o elemento se encontra. É
// preferível usar id quando possível, evita certos erros.
const div1 = document.getElementsByClassName("container")[0];
const paragrafo = document.getElementById("texto")
const main = document.querySelector("main");

// Para adicionar elementos no DOM:
// Primeiro se cria ou manipula o que se quer adicionar
// criando um parágrafo:
let p = document.createElement("p");
p.innerHTML = "texto adicionado por script";
console.log(p);

// para adicionar uma classe ao elemento:
p.classList.add("texto-js");
// Escreve class="texto-js" dentro da tag. Aí o CSS associado é aplicado.

// Adicionando o elemento dentro da tag <div> (exemplo_DOM.html):
div1.append(p);


