// Há alguns problemas com cópias de objetos aninhados em JS


const cursoHtml = {
    curso: "HTML",
    estudantes: [{ nome: "Fulano", email: "fulano@email.com" }],
}

// pega o conteudo do outro objeto e muda apenas o "curso".
const cursoJs = {
    ...cursoHtml,
    curso: "JavaScript",
}

// O problema acontece se por exemplo se desejarmos adicionar um estudante ao curso de JS
// e apenas em JS.
cursoJs.estudantes.push({ nome: "Ciclano", email: "ciclano@email.com" });

console.log("curso HTML: ", cursoHtml)
console.log("curso JS: ", cursoJs)

// "Ciclano" foi adicionando em todos objetos, cursoHtml e cursoJS. 
// É o problema de referencia implicita do JS. É uma cópia rasa, Shallow Copy.

// Precisa-se fazer uma cópia profunda para esse problema, Deep Copy:

const cursoHtml2 = {
    curso: "HTML",
    estudantes: [{ nome: "Fulano", email: "fulano@email.com" }],
}

// Deep Copy
const cursoJs2 = {
    ...cursoHtml,
    curso: "JavaScript",
    estudantes: [...cursoHtml2.estudantes],
}

// Dessa vez adicionará apenas no cursoJs2
cursoJs2.estudantes.push({ nome: "Ciclano", email: "ciclano@email.com" });

// poderia ter ajustado o "estudantes" fora do objeto cursoJs2, funcionaria da mesma forma.
// cursoJs2.estudantes = [...cursoHtml2.estudantes]


