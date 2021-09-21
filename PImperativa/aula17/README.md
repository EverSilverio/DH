# Aula 17 - Métodos de Array

## Exemplos Métodos de Array

> [script.js](https://github.com/EverSilverio/DH/blob/master/PImperativa/aula17/script.js)

```
arr.map()
arr.filter()
arr.reduce()
arr.forEach()
```
## Micro Desafio

> [micro-desafio.js](https://github.com/EverSilverio/DH/blob/master/PImperativa/aula17/micro-desafio.js)

1. Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
3. Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

  ```
  Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
  ```
  
4. Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

## Métodos avançados array

> [metodos__array.js](https://github.com/EverSilverio/DH/blob/master/PImperativa/aula17/metodos_array.js)

1. Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().
2. Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())
3. Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: 

