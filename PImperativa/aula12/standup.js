const alice = [23, 82, 46];
const bob = [45, 8, 32];

function encontrarGanhador(a, b) {
    let pontosA = 0;
    let pontosB = 0;
    let vencedor = '';

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            pontosA += 1; 
        } else if (b[i] > a[i]) {
            pontosB += 1;
        }
    }

    vencedor = pontosA > pontosB ? 'Alice' : 'Bob';
    console.log('O vencedor é ' + vencedor + '!')
}

encontrarGanhador(alice, bob);