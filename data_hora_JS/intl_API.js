// Intl é uma API do proprio JS

// Detre todas suas funcionalidades, ela também pode
// ser usada para formatação de datas e horas

// Para pegar informções da localidade
const localidade = Intl.DateTimeFormat().resolvedOptions();

console.log(localidade);


// Para formatar pela localidade
console.log(new Intl.DateTimeFormat('pt-BR').format(new Date()));
// 22/07/2021
console.log(new Intl.DateTimeFormat('en-US').format(new Date()));
// 7/22/2021

// obs: timezone = fuso horário

// Para pegar a DIFERENÇA de timezone
const data = new Date();

console.log(data.getTimezoneOffset()); // 180
// o resultado vem em minutos, então para converter em horas
// precisa dividir por 60
console.log(data.getTimezoneOffset() / 60); // 3
// 3 horas a menos que o UTC


