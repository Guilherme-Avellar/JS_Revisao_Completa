// Alguns métodos disponiveis para pegar as informações e
// também alguns para modifica-las:

let dataQualquer = new Date("2020-12-01T12:30:12");

// Para pegar o dia da semana:
console.log(dataQualquer.getDay());
// vai de 0 a 6, sendo 0 = Domingo

// Dia do mês:
console.log(dataQualquer.getDate());
// Também começando do 0

// Para pegar o mês:
console.log(dataQualquer.getMonth());
// Começa do 0, Janeiro = 0

// Para pegar o ano:
console.log(dataQualquer.getFullYear());

// Para pegar a hora:
console.log(dataQualquer.getHours());

// Para pegar os minutos:
console.log(dataQualquer.getMinutes());

// Para pegar os segundos:
console.log(dataQualquer.getSeconds());

// Para MODIFICAR o ano:
dataQualquer.setFullYear(2021);
console.log(dataQualquer);

// Para MODIFICAR o mes:
dataQualquer.setMonth(11);

// Para MODIFICAR o dia:
dataQualquer.setDate(25);

// Para MODIFICAR a hora:
dataQualquer.setHours(13);

// há varios outros
