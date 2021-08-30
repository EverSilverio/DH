/**
 * Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
 * Importante: Não poderá utilizar o método Array.join() original.
 * Por exemplo:
 * join(["o","l","á"]) deve retornar a string "olá".
 * join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".
 */

function fakeJoin(arr) {
    let texto = ''
    for (let i = 0; i < arr.length; i++) {
        texto += arr[i];
        // para ser igual ao Join é necessário essa linha, se for pra atender o enunciado nao precisa
        texto = i < arr.length - 1 ? texto + ',' : texto;
    }

    return texto;
}

let arr = ['O', 'l', 'a',  'h', ' ', 'mundo', '!'];

console.log('-- Fake Join por função --');
console.log(fakeJoin(arr));

console.log('-- Método Join nativo --');
console.log(arr.join());
