
// ==================== TABELA DE CONVERSÕES NA PÁGINA 45 (the definitive guide) ====================

// O JS geralmente faz as conversões automáticamente na maior parte das vezes
// Para strings, é sempre certo a converção, para numeros as vezes ocorre do resultado
// da convesão ser NaN, caso não seja possivel converter, exemplo

var n = 1 - "x"; // => NaN

10 + " objetos" // = 10 objetos | o 10 é convertido em string
"7" * "4" // = 28 | 7 e 4 são convertidos para números e são multiplicados

n + " objetos" // = NaN objetos | junta a variavel, que é NaN com " objetos" e transforma em uma só string


// strings que podem ser transformadas em numeros ("12", "0" etc) são convertidas para numeros. Podem conter espaços "  "


// Detalhe nas conversões de igualdade. O JS consegue comparar diferentes tipos com a igualdade ==
// exemplos de True:
null == undefined; // são tratados como iguais
"0" == 0 // o JS transforma o "0" em número antes de comparar
0 == false // o boleano é convertido em numero antes da comparação
"0" == false // os dois operadores são convertidos em numero antes da comparação

// para conversões explicitas, usa-se as funções Boolean(), Number(), String() ou Object()