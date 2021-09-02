// Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:
// Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido, você deve exibir a string "Digital" em vez do número.
// Se o número a ser impresso for um múltiplo do segundo parâmetro inserido, você deve exibir a string "House" em vez disso.
// Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você deve exibir a string "Digital House" em vez do número.

console.log('----------- DIGITAL HOUSE ------------');
function digitalHouse(num1, num2) {
    let imprimir = '';
    for (let i = 1; i <= 100; i++) {
        if (i % num1 == 0 && i % num2 == 0) {
            imprimir = 'Digital House';
        } else if (i % num1 == 0) {
            imprimir = 'Digital';
        } else if (i % num2 == 0) {
            imprimir = 'House';
        } else {
            imprimir = i;
        }
        console.log(imprimir);
    }
}

digitalHouse(2,5);

console.log('----------- SOMAR ARRAY ------------');

//Você deve criar uma função somaArray que aceita uma matriz de números e retorna a soma de todos eles. 
function somarArray(arr) {
    let result = 0;
    for (let item = 0; item < arr.length; item++) {
        result += arr[item];
    }
    return result;
}

console.log('Somar Array = ' + somarArray([2 ,4, -2, 10]));

console.log('----------- FAKE JOIN ------------');

// você deve modificar a função join()  para que ela possa receber uma matriz de strings de qualquer quantidade de elementos. 
function fakeJoin(arr) {
    let texto = ''
    for (let i = 0; i < arr.length; i++) {
        texto += arr[i];
        // para ser igual ao Join é necessário essa linha, se for pra atender o enunciado nao precisa
        texto = i < arr.length - 1 ? texto + ',' : texto;
    }
    return texto;
}

let arr = ['O', 'l', 'a',  'h', ' ', 'mundo', '!'];

console.log('-- Fake Join por função --');
console.log(fakeJoin(arr));

console.log('-- Método Join nativo --');
console.log(arr.join());