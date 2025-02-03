
// inconsistência em operações de decimais, caracteristica da linguagem
console.log("\noperações com decimais não são sempre precisas, exemplo:");
console.log("0.2 -0.1 = ", 0.2 - 0.1);
console.log("0.3 -0.2 = ", 0.3 - 0.2);
console.log("0.8 -0.7 = ", 0.8 - 0.7);


// o JS segue uma ideia de limite, do calculo 1 da matemática acadêmica, por exemplo:
console.log("\nLógica de matemática acadêmica, limites, por exemplo:");
console.log("1 / 0 = ", 1 / 0);
console.log("1 / - 0 = ", 1 / - 0);
console.log("1 / infity = ", 1 / Infinity);
console.log("1 / - infity = ", 1 / - Infinity);

// porém, não consigo fazer o número de euler no "braço"
var n = Infinity;
console.log(Math.pow(1 + 1/n, n));

// deve-se usar:
Math.E;