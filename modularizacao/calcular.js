
// Precisa da palavra-chave export antes da função para poder 
// importar em outro arquivo

export function somar(a, b) {
  return a + b;
}

export function subtrair(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

// Seria possível exportar tudo de uma vez:
// export { somar, subtrair, multiplicar };
// Não precisaria do export antes de cada função com essa solução


