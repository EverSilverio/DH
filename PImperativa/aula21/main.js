let EstudanteModulo = require ("./estudosProva");

let estudante1 = new EstudanteModulo("Marcelo", 1, [7,8,9,10]);

console.log(estudante1.faltas);
estudante1.ausente();
console.log(estudante1.faltas);

