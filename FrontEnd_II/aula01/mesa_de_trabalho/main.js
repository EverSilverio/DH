let lista = [1,2,4,8];

let soma = 0;
lista.forEach(el => {
    soma+=el;
    if (soma !== el) {
        console.log(soma);
    }
});