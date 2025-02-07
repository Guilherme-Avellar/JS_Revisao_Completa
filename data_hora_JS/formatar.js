
// Para formatar a data:
let dataToFormat = new Date("2020-12-01T12:30:12");
// Para sempre ter dois dígitos, quando se tem apenas um dígito
// a formatação pega apenas esse unico digito, o código a seguir
// põe um zero a esquerda:
//console.log(dataToFormat.getDate().toString().padStart(2, "0")); // 01
// console.log(dataToFormat.getDate()) // 1

// toString() passa a informação para uma string, e aí se manipula como string

// Exemplo para formatar o "numero" do mês correto (lembrando que começa do 0):
//console.log((dataToFormat.getMonth() + 1).toString().padStart(2, "0")); // 12

// Exemplo para formatar tudo:
let dia = dataToFormat.getDate().toString().padStart(2, "0");
let mes = (dataToFormat.getMonth() + 1).toString().padStart(2, "0");
let ano = dataToFormat.getFullYear();

console.log(`${dia}/${mes}/${ano}`) // 1/12/2020

