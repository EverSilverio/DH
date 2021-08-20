/***
 * mais sobre spread sintax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * mais sobre método join(): https://www.w3schools.com/jsref/jsref_join.asp
 * mais sobre loops com "for": https://www.w3schools.com/jsref/jsref_for.asp
 */
/* 
* Calculadora - Nível I 
*/

// função adicionar
function adicionar(...numeros) {
    var resultado = 0; //inicia resultado zerado
    for (var i = 0; i < numeros.length; i++) {
        resultado += numeros[i]; //soma cada numero recebido no parametro
    }
    return resultado;
}

// função subtrair
function subtrair(...numeros) {
    var resultado = numeros[0]; //inicia resultado com o primeiro valor
    for (var i = 1; i < numeros.length; i++) {
        resultado -= numeros[i]; //subtrai cada numero recebido no parametro
    }
    return resultado;
}

// função multiplicar
function multiplicar(...numeros) {
    var resultado = 1;  // inicia resultado como 1
    for (var i = 0; i < numeros.length; i++) {
        resultado *= numeros[i];
    }
    return resultado;
}

// função de divisão
function dividir(...numeros) {
    return numeros[0] / numeros[1];
}

/* 
* Calculadora - Nível II
*/

console.log("-------------- Teste de Operações / Calculadora --------------");
var numeros = []; //inicia lista de numeros vazia

// Executar a função que soma e a função que subtrai, passando quaisquer números como argumentos
numeros = [13, 2, 3, 6];

// executa adicionar()
console.log(
    "A soma de " + numeros.join(" + ") + " = " + adicionar(...numeros)
);

// executa subtrair()
console.log(
    "A subtração de " + numeros.join(" - ") + " = " + subtrair(...numeros)
);

// executa multiplicar
numeros = [2, 3, 5, 4]
console.log(
    "A multiplicação de " + numeros.join(" x ") + " = " + multiplicar(...numeros)
);

// Execute a função que faz divisão, passando quaisquer números como argumentos
numeros = [50, 2, 5]
console.log(
    "A divisão de " + numeros.join(" ÷ ") + " = " +  dividir(...numeros)
);

// Execute a função que faz divisão, passando agora o número zero como um dos argumentos.
numeros = [50, 0]
console.log(
    "A divisão de " + numeros.join(" ÷ ") + " = " +  dividir(...numeros)
);

numeros = [0, 2]
console.log(
    "A divisão de " + numeros.join(" ÷ ") + " = " +  dividir(...numeros)
);

/* 
* Calculadora - Nível III
*/

// Função potencia, recebe numero e expoente (deve utilizar funcao multiplicar)
function potencia(numero, expoente) {
   var resultado = 1;
   for (var i = 0; i < expoente; i++) {
       resultado = multiplicar(resultado, numero)
   }
   return resultado;
}

numeros = [2,8]
console.log(
    numeros[0] + " elevado a " + numeros[1] + " = " + potencia(...numeros)
);

// funcao media (deve utilizar funcoes adicionar e dividir)
function media(...numeros) {
    var soma = adicionar(...numeros);
    return dividir(soma, numeros.length)
}

numeros = [10, 4, 7, 5, 9];
console.log(
    "A média dos números " + numeros.join() + " é " + media(...numeros)
);

// Função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular
// deverá retornar x% de totalPorcentagem. (usar funcao multiplicar e dividir)
function calculaPorcentagem(total, percentual) {
    var valorPorcentagem = multiplicar(total, (dividir(percentual,100)));
    return valorPorcentagem;
}

numeros = [90, 10];
console.log(
    numeros[1] + "% de " + numeros[0] + " é " + calculaPorcentagem(...numeros)
);

// Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
function geradorDePorcentagem(a, b) {
    var valor = multiplicar(dividir(a,b),100);
    return valor;
}

numeros = [9, 90];
console.log(numeros[0] + " representa " + geradorDePorcentagem(...numeros) + "% de " + numeros[1]);
