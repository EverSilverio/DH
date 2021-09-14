const funcaoSomar = require('./somar');
const funcaoSubtrair = require('./subtrai');
const funcaoMultiplicar = require('./multiplica');
const funcaoDividir = require('./divisao');
const objJson = require('./json');

let numeros = [20, 6, 4, 3]
console.log('A soma é ' + funcaoSomar(numeros));
console.log('A subtração é ' + funcaoSubtrair(numeros));
console.log('A multiplicação é ' + funcaoMultiplicar(numeros));
numeros = [100, 2, 5]
console.log('A divisão é ' + funcaoDividir(numeros));

console.log(`${objJson.nome} ${objJson.sobrenome}, ${objJson.idade} anos, natural de ${objJson.natural}`);