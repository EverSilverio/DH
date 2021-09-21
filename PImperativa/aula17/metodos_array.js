/*
Métodos avançados array
1. Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().
2. Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())
3. Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: 
*/

//1
let numeros = [2, 4, 6, 8, 10, 20];

function dividePelaSoma(arr) {
    let soma = arr.reduce((acc, num) => acc + num); //soma de todos itens do array
    let divisao = arr.map(el => el / soma);  //divide cada item do array pela soma
    return divisao;
}
console.log('--- exercicio 01 ---');
console.log(dividePelaSoma(numeros));

//2
let palavras = ['array', 'constantes', 'variaveis', 'funcoes', 'callback', 'module'];
let tamanho = 5;

function palavrasXLetras(palavras, tam) {
    return palavras.filter(e => e.length = tam);
}

console.log('--- exercicio 02 ---');
console.log(palavrasXLetras(palavras, tamanho));

//3 
let alunos = [
    { nome: 'Joao', nota: 7 },
    { nome: 'Maria', nota: 10 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Tiago', nota: 6 },
    { nome: 'André', nota: 9 },
];

function ordenaNota(arr) {
    return arr.sort((a, b) => b.nota - a.nota)
}

function ordenaNome(arr) {
    return arr.sort((a, b) => {
        if (a.nome > b.nome) {
            return 1;
        }
        if (a.nome < b.nome) {
            return -1;
        }
        return 0;
    })
}

console.log('--- exercicio 03 - nota decrescente ---');
console.log(ordenaNota(alunos));
console.log(ordenaNome(alunos));