/*
Calculadora de notas
Crie o objeto do aluno,que consistirá nas seguintes propriedades básicas:
número | Número do arquivo | Lista de notas 
Gostaríamos de calcular a média do aluno e se ela é aprovada com base em uma nota
de aprovação que será dada. Para este exercício vamos deixar você pensar sobre
todos os métodos e propriedades que podem ser necessários para que nosso
programa funcione corretamente da maneira solicitada.
*/

let aluno = {
    numero: 1,
    arquivo: 'Teste',
    notas: [9, 7, 10, 5, 8],
    media: 0,
    calcMedia: function() {
        let soma = 0;
        for(i in this.notas) {
            soma += this.notas[i]; 
        }
        this.media = soma / this.notas.length;
    },
    isAprovado: function(notaMinima) {
        console.log(`--- Media minima ${notaMinima} ---`);
        this.calcMedia();
        let status = this.media >= notaMinima ? 'aprovado' : 'reprovado'
        console.log(`Aluno ${this.numero} ${status} com média ${this.media}`);
    }
}

aluno.isAprovado(7)
