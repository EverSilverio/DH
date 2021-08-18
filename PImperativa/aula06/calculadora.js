/* 
* Calculadora - Nível I 
*/

// Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
function adicionar(a, b) {
    var soma = a + b;
    return soma;
}

// Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
function subtrair(a, b) {
    var subtracao = a - b;
    return subtracao;
}

// Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
function multiplicar(a, b) {
    var multiplicacao = a * b;
    return multiplicacao;
}

// Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
function dividir(a, b) {
    var divisao = a / b;
    return divisao;
}

/* 
* Calculadora - Nível II
*/

// Crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
// console.log ("-------------- Teste de Operações / Calculadora --------------")
console.log ("-------------- Teste de Operações / Calculadora --------------");

// Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
var a1 = 5;
var b1 = 2;
var adicao = adicionar(a1,b1);
console.log("A soma de " + a1 + " + " + b1 + " = " + adicao);

var a2 = 8;
var b2 = 3;
var subtracao = subtrair(a2, b2);
console.log("A subtração de " + a2 + " - " + b2 + " = " + subtracao);

// Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
var a3 = 3;
var b3 = 5;
var multiplicacao = multiplicar(a3, b3);
console.log("A multiplicação de " + a3 + " x " + b3 + " = " + multiplicacao);

// Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
var a4 = 16;
var b4 = 2;
var divisao = dividir(a4, b4);
console.log("A divisão de " + a4 + " ÷ " + b4 + " = " + divisao);

// Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.
var a5 = 0;
var b5 = 2;
var divisao5 = dividir(a5, b5);
console.log("A divisão de " + a5 + " ÷ " + b5 + " = " + divisao5);

var a6 = 16;
var b6 = 0;
var divisao6 = dividir(a6, b6);
console.log("A divisão de " + a6 + " ÷ " + b6 + " = " + divisao6);

/* 
* Calculadora - Nível III
*/

// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
function quadradoDoNumero(a) {
    var quadrado = multiplicar(a, a);
    return quadrado;
}

// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
function mediaDeTresNumeros(a, b, c) {
    var soma1 = adicionar(a, b); //soma a com b
    var total = adicionar(soma1, c);  //soma c com o total da soma a com b
    var divisao = dividir(total, 3);  // calcula a media dividindo o total por 3
    var media = divisao; // temos a media
    return media;
}

var numero = 3;
var quadrado = quadradoDoNumero(numero)
console.log(numero + " ao quadrado é " + quadrado);

var num1 = 9;
var num2 = 8;
var num3 = 7;
var media = mediaDeTresNumeros(num1, num2, num3);
console.log("A média de (" + num1 + ", " +  num2 + ", " + num3 + ") é " + media);


// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
function calculaPorcentagem(total, percentual) {
    var valorPorcentagem = total * (percentual / 100);
    return valorPorcentagem;
}

var c1 = 200;
var c2 = 20;
var valorPer = calculaPorcentagem(c1,c2);

console.log(c2 + "% de " + c1 + " é " + valorPer);

// Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
function geradorDePorcentagem(a, b) {
    var valor = a / b * 100;
    return valor;
}
var p1 = 9;
var p2 = 90;
var porcentagem = geradorDePorcentagem(p1,p2);
console.log(p1 + " representa " + porcentagem + "% de " + p2);