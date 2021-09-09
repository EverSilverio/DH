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

let correntistas = [];

correntistas.push(new correntista(5486273622, 'Conta Corrente', 27771, 'Abigael Natte'));
correntistas.push(new correntista(1183971869, 'Conta Poupança', 8675, 'Ramon Connell'));
correntistas.push(new correntista(9582019689, 'Conta Poupança', 27363, 'Jarret ente'));
correntistas.push(new correntista(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley'));
correntistas.push(new correntista(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer'));
correntistas.push(new correntista(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus'));
correntistas.push(new correntista(4223508636, 'Conta Corrente', 2177, 'Thomasin Latour'));
correntistas.push(new correntista(185979521, 'Conta Poupança', 25994, 'Lonnie eijden'));
correntistas.push(new correntista(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan'));
correntistas.push(new correntista(2138105881, 'Conta Poupança', 33196, 'Bendite Huggett'));

let banco = {
    clientes: correntistas, 
    consultarCliente: function (nome) {
        for(i in this.clientes) {
            if (this.clientes[i].titular == nome) {
                return this.clientes[i]
            }
        }
        return 'Cliente ' + nome + ' não encontrado';
    },
    deposito: function (nome,valor) {
        let cliente = this.consultarCliente(nome);
        if (typeof cliente != 'string') {
            let saldo_anterior = cliente.saldo;
            cliente.saldo += valor;

            console.log('Depósito de $' + valor + ' realizado, seu novo saldo é $' + cliente.saldo + ' | saldo anterior: $' + saldo_anterior);
        } else {
            console.log(cliente);
        }
    },
    saque: function (nome,valor) {
        let cliente = this.consultarCliente(nome);
        if (typeof cliente != 'string') {
            let saldo_anterior = cliente.saldo;
            cliente.saldo -= valor;

            if (cliente.saldo < 0) {
                console.log('Fundos insuficientes - Saldo $' + saldo_anterior);
            } else {
                console.log('Saque de $' + valor + ' realizado, seu novo saldo é $' + cliente.saldo + ' | saldo anterior: $' + saldo_anterior);
            }            

        } else {
            console.log(cliente);
        }
    }
};

banco.saque('Alonso Wannan', 1000);

// bonus
/**
* Você deve criar uma função chamada propriedadeUnica que recebe uma array de objetos como parâmetro e uma string.  Você deve devolver um novo array de objetos, tendo apenas a propriedade que foi passada como string.  
*/

function propriedadeUnica(arr, prop) {
  let aux = [];
  for(i in arr) {
    aux.push({[prop] : arr[i][prop]} )
  } 
  console.log(aux)
} 

propriedadeUnica(banco.clientes, 'titular')
