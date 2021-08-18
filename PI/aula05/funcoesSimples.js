// Crie uma função que converta polegadas em centímetros. 
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
//  1 polegada = 2.54cm

function polegadaParaCentimetro(polegada) {
    return polegada * 2.54;
}
console.log(polegadaParaCentimetro(5));

//Crie uma função que receba uma string e a converta em um URL.
//ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function converteUrl(string) {
    return 'http://' + string + '.com.br';
}
console.log(converteUrl('aprendenddojs'));

// Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function exclamacao(frase) {
    return frase + '!';
}
console.log(exclamacao('Olá Mundo'));

// Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function idadeCaes(idadeHumano) {
    return idadeHumano * 7;
}
console.log(idadeCaes(6));

// Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.

function valorHora(salarioMes) {
    return salarioMes / 160;
}
console.log(valorHora(1100));

// Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. 
// Em seguida, execute a função, testando diferentes valores. 
// *IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.
function calcIMC(altura, peso) {
    return peso / (altura * altura)
}
console.log(calcIMC(1.81, 92));

/*
Se chegarmos a este ponto, ficaremos muito satisfeitos. 
Agora, deixamos alguns exercícios com uma dificuldade extra: 
você terá que buscar alguns conceitos extras para poder resolver estes exercícios. 
É uma prática que os programadores fazem todos os dias. 
Como sempre dizemos, uma parte importante do aprendizado em programação, 
é ignorar a complexidade e ir estritamente ao que precisamos, sabemos que não é
uma prática fácil de fazer, mas com o tempo se tornará mais fácil e divertida.
**/

// Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// Investigue o que o método de .toUpperCase() faz.
function converteMaiuscula(texto) {
    return texto.toUpperCase();
}
console.log(converteMaiuscula('texto todo minúsculo'));

// Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
// Dica: Isso te ajudará a entender o que o operador typeof faz.
function tipoValor(valor) {
    return typeof valor;
}
console.log(tipoValor('um texto'));  // string
console.log(tipoValor(10)); //number
console.log(tipoValor(true));  //boolean
console.log(tipoValor({valor: 10}));  //objeto

// Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
// Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

function circunferencia(raio) {
    return 2 * Math.PI * raio;
}
console.log(circunferencia(15));