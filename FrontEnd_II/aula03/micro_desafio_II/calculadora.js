const funcaoSomar = require('./somar');
const funcaoSubstrair = require('./subtrair');
const funcaoMultiplicar = require('./multiplicar');
const funcaoDividir = require('./dividir');

// Executar a função que permite adicionar e a função que permite subtrair, passando como argumentos quaisquer dois números. Mostrar os resultados no console.
console.log(funcaoSomar(5,2));
console.log(funcaoSubstrair(5,2));

// Executar a função que permite a multiplicação, passando como argumentos quaisquer dois números. Mostrar o resultado no console.
console.log(funcaoMultiplicar(5,2));

// Executar a função que permite multiplicar, passando agora como um dos dois argumentos, o número zero. Mostrar o resultado no console
console.log(funcaoMultiplicar(0,2));

// Executar a função que permite a divisão, passando como argumentos quaisquer dois números. Mostrar o resultado no console.
console.log(funcaoDividir(10,2));

// Executar a função que permite dividir, passando agora como um dos dois argumentos, o número zero. Mostrar o resultado no console.
console.log(funcaoDividir(10,0));