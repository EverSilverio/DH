let Estudante = require('./estudante');
let novaLista = require('./estudantes');

let curso = {
    nome: "Programação Web",
    notaMin: 7,
    faltaMax: 5,
    lista: [
        new Estudante('Niara', 0, [9.5, 8, 9, 10]),
        new Estudante('Everton', 1, [5, 7, 6, 6]),
        new Estudante('Felipe', 5, [10, 10, 7, 8]),
        new Estudante('Gessyka', 6, [10, 9, 8, 9]),
        new Estudante('Andrey', 4, [7, 10, 9, 7])
    ],
    adicionaAluno: function (aluno) {
        this.lista.push(aluno);
    },
    aprovado: function (aluno) {
        let est;
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].nome == aluno) {
                est = this.lista[i];
            }
        }

        let media = est.calcularMedia();

        let aprovadoMedia = (media >= this.notaMin) && (est.faltas < this.faltaMax);
        let aprovadoRespescagem = ((media * 1.1) >= this.notaMin) && (est.faltas == this.faltaMax);

        if (aprovadoMedia || aprovadoRespescagem)
            return true;
                
        return false;
    },
    alunosAprovados: function(){
        return this.lista.map(aluno => {
            return this.aprovado(aluno.nome)
        })
    }
}

// atualza lista com novaLista importada
curso.lista = novaLista;

// adiciona novos alunos
curso.adicionaAluno(new Estudante('Marcos', 2, [10, 8, 9, 7]));
curso.adicionaAluno(new Estudante('Bicudo', 0, [10, 8, 9, 7]));

// verificar se um aluno foi aprovado ou não
if (curso.aprovado('Gessyka')) {
    console.log('Aprovado');
} else {
    console.log('Nao Aprovado');
}

// imprime lista de booleanos de aprovacao
console.log(curso.alunosAprovados());