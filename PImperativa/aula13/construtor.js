function DadosBancarios(numeroConta, tipoDeConta, saldo, titularConta ){
    this.NumeroDaConta=numeroConta;
    this.TipoDeConta=tipoDeConta;
    this.saldo=saldo;
    this.TitulardaConta=titularConta;
}

let correntistas = [
    new DadosBancarios(1001, "CC",15000, "João da Silva"),
    new DadosBancarios(1002, "CP", 16000, "José da Souza"),
    new DadosBancarios(1003, "CC", 150, "Daniel Mendes"),
    new DadosBancarios(1004, "CP", 1000000, "José de Sá"),
    new DadosBancarios(1005, "CC", 1590, "Joana Ribeiro"),
    new DadosBancarios(1006, "CC",15000, "Sergio da Silva"),
    new DadosBancarios(1007, "CP", 155000, "Alice da Souza")
    new DadosBancarios(1008, "CC",18000, "João da Silva"),
]

console.log(correntistas);
