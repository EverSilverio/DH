/*
Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:	
1. a maior e a menor altura do grupo;
2. a média de altura das mulheres;
3. o número de homens.
*/
console.log('--- EXERCICIO ALTURA ---');

function calculo() {
    let lista = [
        {altura: 1.80, sexo: 'M'},
        {altura: 1.67, sexo: 'F'},
        {altura: 1.71, sexo: 'M'},
        {altura: 1.46, sexo: 'F'},
        {altura: 1.95, sexo: 'M'},
        {altura: 2.01, sexo: 'M'},
        {altura: 1.72, sexo: 'F'},
        {altura: 1.79, sexo: 'M'},
        {altura: 1.88, sexo: 'M'},
        {altura: 1.65, sexo: 'F'},
        {altura: 1.83, sexo: 'M'},
        {altura: 1.89, sexo: 'M'},
        {altura: 1.65, sexo: 'F'},
        {altura: 1.55, sexo: 'F'},
        {altura: 1.72, sexo: 'F'},
    ]
    
    // ordena lista
    lista.sort(function (a, b) {
        return a.altura - b.altura;
    })

    //soma de altura das mulheres ?
    // total de mulheres ?
    // media ?
    let somaAltMulheres = 0;
    let qtdMulheres = 0;
    let qtdHomens = 0;

    lista.forEach(function (el) {
        if (el.sexo === 'F') {
            qtdMulheres += 1;
            somaAltMulheres += el.altura;
        } else {
            qtdHomens += 1;
        }
    })
    
    let mediaAltMulheres = (somaAltMulheres / qtdMulheres).toFixed(2);
    
    console.log(`A menor altura do grupo é ${lista[0].altura}`);
    console.log(`A maior altura do grupo é ${lista[14].altura}`);
    
    console.log(`A média de altura das mulheres é ${mediaAltMulheres}`);
    console.log(`A quantidade de homens é ${qtdHomens}`);
}

calculo();  //invoca função de calculo

/*
Cada espectador de um cinema respondeu a um questionário no qual constava sua 
idade e a sua opinião em relação ao filme: ótimo 3, bom 2, regular 1.

Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
1. a média das idades das pessoas que responderam ótimo;
2. a quantidade de pessoas que responderam regular;
3. a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
*/

let listaCinema = [
    {idade: 40, opiniao: 3},
    {idade: 18, opiniao: 2},
    {idade: 32, opiniao: 1},
    {idade: 25, opiniao: 3},
    {idade: 45, opiniao: 2},
    {idade: 52, opiniao: 2},
    {idade: 17, opiniao: 2},
    {idade: 26, opiniao: 2},
    {idade: 29, opiniao: 3},
    {idade: 32, opiniao: 3},
    {idade: 35, opiniao: 3},
    {idade: 41, opiniao: 3},
    {idade: 62, opiniao: 1},
    {idade: 22, opiniao: 2},
    {idade: 24, opiniao: 3},
]

console.log('--- EXERCICIO CINEMA ---');

function calcOpiniao(listaCinema) {
    let somaIdadeOtimo = 0;
    var qtdOtimo = 0;
    var qtdRegular = 0;
    var qtdBom = 0;
    listaCinema.forEach(function (op) {
        switch (op.opiniao) {
            case 3:
                somaIdadeOtimo += op.idade;
                qtdOtimo += 1;
                break;
            case 2:
                qtdBom += 1;
            case 1:
                qtdRegular += 1;
            default:
                break;
        }
    })

    let mediaIdadeOtimo = (somaIdadeOtimo / qtdOtimo).toFixed(2);
    let percentualBom = ((qtdBom / listaCinema.length) * 100).toFixed(0);

    console.log(`Media da idade das pessoas responderam ÓTIMO é ${mediaIdadeOtimo}`);
    console.log(`${qtdRegular} pessoas responderam REGULAR`);
    console.log(`O percentual de pessoas que responderam BOM é ${percentualBom}%`);
}

calcOpiniao(listaCinema); //invoca funcao de calculo opiniao