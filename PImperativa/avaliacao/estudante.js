function Estudante (nome, faltas, notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function(){
        let soma = this.notas.reduce((arr, el) => arr + el);
        return soma / this.notas.length;
    }
    this.ausente = function(){
        this.faltas++;
    }    
}

module.exports = Estudante;