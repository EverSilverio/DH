/**
 * Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. 
 * Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.
 */

for (let i = 1; i <= 10; i++) {
    if ((i % 2) !== 0) 
        console.log(i);
}