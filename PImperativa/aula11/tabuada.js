/**
 * Crie uma tabuada utilizando o for. 
 * Dica: Para essa tarefa você irá precisar utilizar dois loops (for).
 */

for (let i = 0; i <= 10 ; i++) {
    console.log('---  TABUADA ' + i + '  ---');
    for (let x = 0; x <= 10 ; x++) {
        let result = i * x;
        console.log(i + ' x ' + x + ' = ' + result);
    }
}