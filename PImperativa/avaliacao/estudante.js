function Estudante (nome, faltas, notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function(){
        let soma = 0;
        for(let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }

        return soma / this.notas.length;
    }

    this.ausente = function(){
        this.faltas++;
    }    
}

module.exports = Estudante;