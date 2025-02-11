
// Sintaxe while simple no JS:
var condicao = 0;

while(condicao < 10) {
    console.log('Executando while, condição = ' + condicao);
    condicao++;
}


// Sintaxe Do while no JS:
condicao = false;

do {

    console.log('Executando Do while, condição = ' + condicao);

} while(condicao);
// Lembrando que o Do while executa pelo menos uma vez.


// Sintaxe For no JS:   
for(let i = 0; i < 10; i++) {
    console.log('Executando For, i = ' + i);
}
// É possivel omitir a declaração de variavel,
// mas sera declarada no escopo global, com var:
// for(i = 0; i < 10; i++)



// Mecanica do for IN no JS: -----------------------------------

// Aplicando o For in em um objeto:
const objPessoa = {
    nome: 'Fulano',
    idade: 20,
    sexo: 'Masculino'
}

// Deve-se criar uma variavel que vai percorrer as
// propriedades do objeto:
for (let propriedades in objPessoa) {
    console.log(propriedades);
    console.log(propriedades + ' = ' + objPessoa[propriedades] + '\n\n');
}

// Aplicando o For in em um array:
const arrayPessoas = ['Fulano', 'Ciclano', 'Beltrano'];
// Nesse caso a variavel asume o valor dos indices do array:
for (let index in arrayPessoas) {
    console.log(index);
    console.log(index + ' = ' + arrayPessoas[index] + '\n\n');
}

// Mecanica do for OF no JS:
const estudantes = ['Ana', 'Joao', 'Maria'];
// A variavel assume o valor dos elementos e não dos indices:
for (let estudante of estudantes) {
    console.log(estudante);
}
// É comum nomear a variavel no singular para algo que esta no 
// plural, estudante != estudantes.

// O for OF só pode ser usado em objetos interaveis, como arrays 
// e strings, não em objetos comuns:

const objetoQualquer = {
    nome: 'Fulano',
    idade: 20,
    sexo: 'Masculino'
}
/*
for (let propriedades of objetoQualquer) {
    console.log(propriedades);
}
*/
// Isso resulta em erro, pois o objetoQualquer não é um objeto
// interavel.



// Break e Continue no JS: -----------------------------------

for(let i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    console.log('Executando Break, i = ' + i);
}

for(let i = 0; i < 10; i++) {
    // pula a execução seguinte e vai para a proxima iteração:
    // neste caso, não vai imprimir o valor 5.
    if(i === 5) {
        continue;
    }
    console.log('Executando Continue, i = ' + i);
}



