// O que é considerado falso ou verdadeiro em JS?
// Isso é chamado de Falsy e Truthy


// Exemplos de Falsy:
console.log("\nExemplos de Falsy:\n");

console.log("false: ", false ? "Verdadeiro" : "Falso"); // Falso
console.log("0: ", 0 ? "Verdadeiro" : "Falso"); // Falso
console.log("-0: ", -0 ? "Verdadeiro" : "Falso"); // Falso
console.log("'' (string vazia): ", '' ? "Verdadeiro" : "Falso"); // Falso
console.log("null: ", null ? "Verdadeiro" : "Falso"); // Falso
console.log("undefined: ", undefined ? "Verdadeiro" : "Falso"); // Falso
console.log("NaN: ", NaN ? "Verdadeiro" : "Falso"); // Falso


// Exemplos de Truthy:
console.log("\nExemplos de Truthy:\n");

console.log("true: ", true ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log("1: ", 1 ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log("-1 (ou qualquer outro número diferente de zero): ", -1 ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log("' '(string qualquer): ", ' ' ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log("[] (array vazio): ", [] ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log("{} (objeto vazio): ", {} ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log("function(){} (função vazia): ", function(){} ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log("Infinity: ", Infinity ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log("-Infinity: ", -Infinity ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log("new Date(): ", new Date() ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log("new Object(): ", new Object() ? "Verdadeiro" : "Falso"); // Verdadeiro
console.log("new Array(): ", new Array() ? "Verdadeiro" : "Falso"); // Verdadeiro
