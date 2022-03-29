console.log('Bem vindos ao DH Bank Digital');

const myFirstPromisse = new Promise((resolve, reject) => {
    const bankAccount = {
        state: 'active',
        user: 'Michel Polsan',
        valueAccount: 10
    }

    setTimeout(() => {
        if (bankAccount.valueAccount < 1) {
            reject({
                mensage: 'Saldo insuficiente'
            })
        } else if (bankAccount.state !== 'active') {
            reject({
                mensage: 'Conta inativa'
            })
        } else {
            resolve({
                mensage: 'Transação realizada com sucesso'
            })
        }
    }, 2500);
});

const balance = document.querySelector('.bancaMobile');

myFirstPromisse.then(result => {

    balance.innerHTML = `<h4>${result.mensage}</h4>`;
    console.log(result);

}).catch(error => {

    balance.innerHTML = `<h4>${error.mensage}</h4>`;
    console.log(error);

})

