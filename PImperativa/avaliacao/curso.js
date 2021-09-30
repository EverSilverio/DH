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
        new Estudante('Gessyka', 3, [10, 9, 8, 9]),
        new Estudante('Andrey', 4, [7, 10, 9, 7])
    ],
    adicionaAluno: function (aluno) {
        this.lista.push(aluno);
    },
    aprovado: function (aluno) {
        let estudante;
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].nome == aluno) {
                estudante = this.lista[i];
            }
        }

        let media = estudante.calcularMedia();

        if (
            media >= this.notaMin &&
            estudante.faltas < this.faltaMax
        ) {
            return true
        } else if (
            (media * 1.1) >= this.notaMin &&
            estudante.faltas == this.faltaMax)
        {
            return true
        } 
        
        return false;
    },
    alunosAprovados: function(){
        return this.lista.map(aluno => {
            return this.aprovado(aluno.nome)
        })
    }
}

curso.lista = novaLista;


console.log(curso);

// passar um aluno como parametro
// verificar se ele tem nota >= notaMIn
// verificar se ele tem <= faltaMax
// se a nota for >= faltaMax e nota = notaMin + 10%

curso.adicionaAluno(new Estudante('Marcos', 2, [10, 8, 9, 7]));
curso.adicionaAluno(new Estudante('Bicudo', 0, [10, 8, 9, 7]));

// console.log(curso.lista);

if (curso.aprovado('Felipe')) {
    console.log('Aprovado');
} else {
    console.log('Nao Aprovado');
}

console.log(curso.alunosAprovados());