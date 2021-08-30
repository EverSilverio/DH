/** 
O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
	"star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 
Importante: verifique se tudo funciona corretamente acessando qualquer um dos filmes uma vez que a estrutura correspondente tenha sido criada.

Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
Dica: revise o que faz o método de strings .toUpperCase().

Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
	"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.

Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável.

Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
	const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
	const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções, a fim de verificar seu correto funcionamento.
Se chegarmos a este ponto e tudo estiver bem, o tech leader da equipe deve estar extremamente feliz com nosso trabalho e desempenho.
*/

var titles = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
var animations = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

/**
 * titlesArrayToUpper
 * @param {array} arr 
 */
 function titlesArrayToUpper(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
}

/**
 * mergeArrays  
 * @param {array} arr1 
 * @param {array} arr2 
 * @returns Array concatenado
 */
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

/**
 * gradeCompare 
 * @param {array} asian 
 * @param {array} euro 
 */
function gradeCompare(asian, euro, titles) {
    let equal = '';
    for (let i = 0; i < titles.length; i++) {
        equal = asian[i] === euro[i];
        if (equal) {
            console.log(titles[i]);
            console.log('Nota Asian: ' + asian[i] + ' | Nota Euro: ' + euro[i] + ' >> IGUAL');
        } else {
            console.log(titles[i]);
            console.log('Nota Asian: ' + asian[i] + ' | Nota Euro: ' + euro[i] + ' >> DIFERENTE');
        }
    }
}

// far merge dos arrays
titles = mergeArrays(titles, animations);

// ajusta letras para maiscula
titlesArrayToUpper(titles);

// delete o ultimo registro e guarda o registro deletado
let deletedElement = titles.pop();

console.log('--- LISTA FINAL ---');
console.log(titles);
console.log('--- ELEMENTO DELETADO ---');
console.log(deletedElement);
console.log('--- COMPARA NOTAS ---');
gradeCompare(asiaScores, euroScores, titles);



