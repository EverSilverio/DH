const lista = [
    { altura: 1.80, sexo: 'M' },
    { altura: 1.67, sexo: 'F' },
    { altura: 1.71, sexo: 'M' },
    { altura: 1.46, sexo: 'F' },
    { altura: 1.95, sexo: 'M' },
    { altura: 2.01, sexo: 'M' },
    { altura: 1.72, sexo: 'F' },
    { altura: 1.79, sexo: 'M' },
    { altura: 1.88, sexo: 'M' },
    { altura: 1.65, sexo: 'F' },
    { altura: 1.83, sexo: 'M' },
    { altura: 1.89, sexo: 'M' },
    { altura: 1.65, sexo: 'F' },
    { altura: 1.55, sexo: 'F' },
    { altura: 1.72, sexo: 'F' },
];

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

module.exports = pessoas;