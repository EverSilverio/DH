let bandas = ['Ac/Dc', 'Nirvana', 'Pink Floyd', 'Led Zeppelin', 
'Pearl Jam', 'The Beatles'];

/**
 * Crie a função imprimirInverso que pega um Array como um argumento e imprime 
 * cada elemento em ordem reversa no console (você não precisa inverter o Array).
 */

// considerando fixo a quantidade de elementos do array
function imprimirInverso0(arr) {
    console.log(5, arr[5]);
    console.log(4, arr[4]);
    console.log(3, arr[2]);
    console.log(2, arr[2]);
    console.log(1, arr[1]);
    console.log(0, arr[0]);
}

imprimirInverso0(bandas);

console.log('---');


// com loop for
function imprimirInverso(arr) {
   for (let i = arr.length - 1; i >= 0; i--) {
       console.log(i, arr[i]);
   } 
}

imprimirInverso(bandas)

console.log('---');

// com chamadas da mesma funcao
var i = bandas.length - 1;
function imprimirInverso2(arr) {
    console.log(i, arr[i]);
    if (i > 0) {
        i -= 1;
        imprimirInverso2(arr)
    }
}

imprimirInverso2(bandas)



