// Não se muda algo que já foi criado, mas sim cria-se algo novo a partir do que já existe

const endereco1 = {
    cidade: 'São Paulo',
    rua: 'Rua dos Pinheiros',
    numero: 1293
}

// A constante "endereco2" não é uma cópia do "endereco1", mas sim uma referência para o mesmo objeto.
// Como se fosse um ponteiro do C.
const endereco2 = endereco1;

// O endereco1 também será alterado:
endereco2.numero = 1000;

console.log("endereco1: ", endereco1);
console.log("endereco2: ", endereco2);


// Estratégias para se lidar com a imutabilidade:

// Usa-se o spread, que aí sim, se cria uma cópia idependente do objeto original.
const endereco3 = { ...endereco1 };
endereco3.numero = 2000;

console.log("endereco1: ", endereco1);
console.log("endereco3: ", endereco3);

// Da para sobrepor o valor da cópia já na declaração:
//const endereco3 = { ...endereco1, numero: 2000 };


// Lembrando que array se comporta como objeto:
const array1 = [1, 2, 3, 4, 5];
const array2 = array1;

array2.push(10);

console.log(array1, array2);
