
// Fuso horário UTC-03:00 (Brasília)
const dataComFuso = new Date("2025-02-07T22:39:46.027+03:00");
// +3:00 reduz 3 horas, para adicionar precisa se usar o -

// para comparar com a data sem o timezone
console.log(dataComFuso.toLocaleString())
console.log(new Date().toLocaleString());

//console.log(dataComFuso.toISOString())
// retorna 2025-02-07T22:39:46.027Z

// O método toISOString() retorna a data e hora em 
// UTC (Coordinated Universal Time), sem fuso horário.




