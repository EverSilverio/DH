// Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. 
// Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array.


let lista = [1,2,4,8,5,2];

function somarElementos(arraySoma) {
    console.log('EXEMPLO COM FOREACH');
    let soma = 0;
    arraySoma.forEach(el => {
        soma += el;
        if (soma !== el) {
            console.log(soma);
        }
    })
    
    console.log('EXEMPLO COM FOR');
    let soma1 = 0;
    for (let i = 0; i < arraySoma.length; i++) {
        soma1 += arraySoma[i];
        if (soma1 !== arraySoma[i]) {
            console.log(soma1);
        };
    }

    console.log('EXEMPLO COM REDUCE');
    arraySoma.reduce((valorAtual, valorCorrente) => {
        console.log(valorAtual + valorCorrente);
        return valorAtual + valorCorrente;
    })

}

somarElementos(lista);
