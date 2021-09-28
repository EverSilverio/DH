/*
Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:	
1. a maior e a menor altura do grupo;
2. a média de altura das mulheres;
3. o número de homens.
*/

const pessoas = require('./pessoas');

// calculos recebe: media, extremos ou homens
pessoas.calculos('extremos');  //invoca função de calculo