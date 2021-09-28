// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).
let Estudante = require ("./estudosProva");

let curso = {
    nome: 'Desenvolvimento Web',
    notaMin: 7,
    faltaMax: 5,
    estudantes: [
        new Estudante('Fulano', 1, [7,8,6,9]),
        new Estudante('Ciclano', 2, [9,8,6,9]),
        new Estudante('Marcelo', 1, [7,8,10,9]),
        new Estudante('Marcos', 0, [9,10,9.5,9])
    ]
}

console.log(curso.estudantes);