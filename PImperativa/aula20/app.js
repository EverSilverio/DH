/*
Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:	
1. a maior e a menor altura do grupo;
2. a média de altura das mulheres;
3. o número de homens.
*/

const lista = require('./pessoas');

let pessoas = {
    lista: lista,
    calculos: function (calc) {
        // calc: media, extremos ou homens
        // orde na lista
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

        switch (calc) {
            case 'extremos':
                console.log(`A menor altura do grupo é ${lista[0].altura}`);
                console.log(`A maior altura do grupo é ${lista[14].altura}`);                
                break;
            case 'media':
            console.log(`A média de altura das mulheres é ${mediaAltMulheres}`);
                break;
                case 'homens':
                console.log(`A quantidade de homens é ${qtdHomens}`);
                break;
        }
    }
}

pessoas.calculos('extremos');  //invoca função de calculo