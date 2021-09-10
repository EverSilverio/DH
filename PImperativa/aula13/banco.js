/**
 * estrutura objeto literal - correntista
   correntistas {
       nro_conta: number,
       tipo_conta: string, corrente ou poupança
       saldo: number, decimal
       titular: string (nome completo)
   }
*/

const correntista = function (nroConta, tipoConta, saldo, titular) {
    this.nro_conta = nroConta;
    this.tipo_conta = tipoConta;
    this.saldo = saldo;
    this.titular = titular;
}

let correntistas = [
    new correntista(5486273622, 'Conta Corrente', 27771, 'Abigael Natte'),
    new correntista(1183971869, 'Conta Poupança', 8675, 'Ramon Connell'),
    new correntista(9582019689, 'Conta Poupança', 27363, 'Jarret ente'),
    new correntista(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley'),
    new correntista(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer'),
    new correntista(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus'),
    new correntista(4223508636, 'Conta Corrente', 2177, 'Thomasin Latour'),
    new correntista(185979521, 'Conta Poupança', 25994, 'Lonnie eijden'),
    new correntista(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan'),
    new correntista(2138105881, 'Conta Poupança', 33196, 'Bendite Huggett'),
];

let banco = {
    clientes: correntistas, 
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
        aux.push({[prop] : arr[i][prop]} )
    } 
    console.log(aux)
} 

console.log('---- Propriedade Unica ----');
propriedadeUnica(banco.clientes, 'titular')
