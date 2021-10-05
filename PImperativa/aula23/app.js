/*
Crie um objeto literal Filme representa os dados de um filme (título, diretor, ano, total de votos, nota e uma lista de personagens)
No mesmo objeto Filme crie o método votar, que quando chamando irá acrescentar mais um voto ao filme.
Ao final crie um array com 3 objetos de filmes diferentes e com o método forEach  liste apenas os nomes dos filmes.
*/

const Filme = function (titulo, diretor, ano, votos, nota, personagens) {
    this.titulo = titulo;
    this.diretor = diretor;
    this.ano = ano;
    this.votos = votos;
    this.nota = nota;
    this.personagens = personagens;

    this.votar = function () {
        this.votos++;
    }
}

const filme1 = new Filme(
    'Jogos Trapaças e Dois Canos Fumegantes',
    'Guy Ritchie',
    1999,
    30,
    4.7,
    [
        'Jason Flemyng',
        'Dexter Fletcher',
        'Nick Moran',
        'Jason Statham',
        'Steven Mackintosh',
        'Vinnie Jones'
    ]
)

const filme2 = new Filme(
    'Laranja Mecânica',
    'Stanley Kubrick',
    1972,
    35,
    4.5,
    [
        'Malcolm McDowell',
        'Patrick Magee',
        'Michael Bates',
        'Warren Clarke',
        'Adrienne Corri'
    ]
)

const filme3 = new Filme(
    'Pulp Fiction',
    'Quentin Tarantino',
    1999,
    30,
    4.7,
    [
        'John Travolta',
        'Samuel L. Jackson',
        'Uma Thurman',
        'Bruce Willis',
        'Tim Roth'
    ]
)

let filmes = [filme1, filme2, filme3];

console.log(filme2.votos);

filme2.votar();

console.log(filme2.votos);

filmes.forEach(function (el, i) {
    console.log(el.titulo);
})