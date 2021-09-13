const contas = require('./contas.json'); //importando arquivo json externo

const correntista = function (nroConta, tipoConta, saldo, titular) {
    this.nro_conta = nroConta;
    this.tipo_conta = tipoConta;
    this.saldo = saldo;
    this.titular = titular;
}

for(i in contas) {
    new correntista(
        contas[i].nro_conta,
        contas[i].tipo,
        contas[i].saldo,
        contas[i].titular,
    )
}

let banco = {
    clientes: contas, 
    consultarCliente: function (nome) {
        for(i in this.clientes) {
            if (this.clientes[i].titular == nome) {
                return this.clientes[i]
            }
        }
        return `Cliente ${nome} não encontrado`;
    },
    deposito: function (nome,valor) {
        for(i in this.clientes) {
            if (this.clientes[i].titular == nome) {
                let saldo_anterior = this.clientes[i].saldo;

                this.clientes[i].saldo += valor;
                return `Olá ${nome}, Depósito de $${valor} realizado, seu novo saldo é $${this.clientes[i].saldo} | saldo anterior: $${saldo_anterior}`;
            } 
        }
        return `Cliente ${nome} não encontrado`;
    },
    saque: function (nome,valor) {
        for(i in this.clientes) {
            if (this.clientes[i].titular == nome) {
                let saldo_anterior = this.clientes[i].saldo;

                if ((this.clientes[i].saldo - valor)< 0) {
                    return `Olá ${nome}, Fundos insuficientes - Saldo $ ${saldo_anterior}`;
                } else {
                    this.clientes[i].saldo -= valor;
                    return `Olá ${nome}, Saque de $${valor} realizado, seu novo saldo é $${this.clientes[i].saldo}  | saldo anterior: $${saldo_anterior}`;
                }  
            } 
        }     
        return `Cliente ${nome} não encontrado`;   
    }
};

// console.log(banco);

console.log('--- CONSULTAR CLIENTE  ---');
console.log(banco.consultarCliente('Alonso Wannan'));

console.log('--- DEPÓSITO  ---');
console.log(banco.deposito('Alonso Wannan', 1000));

console.log('--- SAQUE  ---');
console.log(banco.saque('Alonso Wannan', 1001));

console.log('---- objeto literal banco apos transacoes ----');
console.log(banco)

/**
* BONUS
* Você deve criar uma função chamada propriedadeUnica que recebe uma array de objetos 
* como parâmetro e uma string.  Você deve devolver um novo array de objetos, tendo apenas 
* a propriedade que foi passada como string.  
*/

function propriedadeUnica(arr, prop) {
    let aux = [];
    for(i in arr) {
        aux.push({prop : arr[i][prop]} )
    } 
    console.log(aux)
} 

console.log('---- Propriedade Unica ----');
propriedadeUnica(banco.clientes, 'titular')
