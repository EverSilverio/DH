// map()
console.log('--- map ---');
const array = [2, 4, 6, 8];

function teste(e) {
    return e * 3;
}

let result1 = array.map(function (e) {
    return e * 2;
});

let result2 = array.map(e => e * 2);

let result3 = array.map(teste);

console.log(result1);
console.log(result2);
console.log(result3);

// filter()
console.log('--- filter ---');
const idades = [12, 16, 18, 19, 35, 40, 58, 65, 63, 68, 72];

let adultos = idades.filter( el => el >= 18 && el < 65);

console.log(adultos);

// reduce()
console.log('--- reduce ---');
const numeros = [2, 4, 6, 8];
let soma = numeros.reduce((acc, num) => acc + num);
console.log(soma);

// arr.forEach()

const bandas = ['Pearl Jam', 'AC/DC', 'Ramones', 'Black Sabbath'];

bandas.forEach((item) => {
    console.log('Banda: ' + item);
})


