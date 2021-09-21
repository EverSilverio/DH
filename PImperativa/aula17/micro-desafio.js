/*
1. Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
3. Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
4. Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
*/

//1
let pares = [2, 4, 6, 8, 10, 12];
let impares = pares.map(e => e - 1)
console.log(impares);

//2
let nomes = ['Maria', 'Joao', 'Pedro', 'Maria', 'Lucas'];
let marias = nomes.filter( n => n == 'Maria');
console.log(marias);

//3 
let numeros = [1, 2, 3, 4, 5];
let string = numeros.reduce( (acc, el) => acc + ' - ' + el )
console.log(string);

//4
let animais = ['macaco', 'zebra', 'girafa', 'leao'];
animais.forEach((animal) => console.log(`O animal é ${animal}`));