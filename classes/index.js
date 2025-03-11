// Classes são formas de criar objetos com propriedades e métodos.
// Em vez de se criar um objeto por uma simples função construtora,
// há a possibilidade de se criar uma classe com o mesmo objetivo,
// mas de forma mais organizada e com um código mais limpo. 
// Além de ser mais parecido com outras linguagens como Java, C# e
// Python.

// esse import não esta funcionando
import { ContaCorrente } from "./ContaCorrente.js"

const guilherme007 = new ContaCorrente(111, 1000, "Guilherme", "11111-00", "10/06/1986");

console.log("\nClasse guilherme007: ", guilherme007,"\n");

console.log("\nSaldo da conta: ", guilherme007.getSaldo(), "\n");

