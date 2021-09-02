/**
 * Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
 */

// utlizando do / while
function somarArray1(arr) {
    let result = 0;
    let item = 0;

    do {
        result += arr[item];
        item += 1;
    } while (item < arr.length)

    return result;
}

console.log(somarArray([2 ,4, -2, 10]));

// utilizando loop for
function somarArray0(arr) {
    let result = 0;
    for (let item = 0; item < arr.length; item++) {
        result += arr[item];
    }

    return result;
}

console.log(somarArray([2 ,4, -2, 10]));