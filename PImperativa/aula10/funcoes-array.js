/**
 * Crie um array que contenha nomes de produtos para compra. 
 * 
 * Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 
 * 
 * Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.
 * 
 * console.log(“O método Join realiza tal coisa”)
 * console.log(RESULTADO_DO_JOIN)
 * 
 */
let lista = [];

function iniciaLista() {
    lista = [
        'macarrão', 
        'arroz', 
        'feijão',
        'leite', 
        'açucar',
        'café', 
        'pão'
    ];
}

/**
 * join
 * arr.join()
 * Converte elementos de um array em string
 */

iniciaLista();

console.log('O método Join converte elementos de um array em string');
console.log('retorno de lista.join():');
console.log(lista.join());

console.log('---');

/**
 * pop
 * arr.pop()
 * Remove o último elemento de um array
 * Retorna o elemento removido no retorno da função e altera a lista original
 */
iniciaLista();

console.log('O método Pop remove o último elemento de um array');
console.log('Retorna o elemento removido no retorno da função e altera a lista original');
console.log('lista original:');
console.log(lista);
console.log('retorno de lista.pop():');
console.log(lista.pop());
console.log('lista alterada:');
console.log(lista);
 
console.log('---');
 
/**
 * Push
 * arr.push()
 * O método Push adiciona um ou mais elementoz novos no fim da lista
 * Recebe como parâmetro os itens que devem ser adicionados
 * retorna o length da lista atualizada e altera a lista original
 */

iniciaLista();

console.log('O método Push adiciona um ou mais elementos novos no fim da lista');
console.log('Recebe como parâmetro os itens que devem ser adicionados');
console.log('Retorna o length da lista atualizada e altera a lista original');
console.log('lista original:');
console.log(lista);
console.log('retorno de lista.push() incluindo "Manteiga" na fim da lista:');
console.log(lista.push('Manteiga'));
console.log('lista alterada:');
console.log(lista);

console.log('---');

/**
 * Shift
 * arr.shift()
 * O método Shift remove o primeito elemento da lista
 * Retorna o elemento que foi excluído e altera a lista original
 */

iniciaLista();

console.log('O método Shift remove o primeito elemento da lista');
console.log('Retorna o elemento que foi excluído e altera a lista original');
console.log('lista original:');
console.log(lista);
console.log('retorno de lista.shift():');
console.log(lista.shift());
console.log('lista alterada:');
console.log(lista);

console.log('---');

/**
 * UnShift
 * arr.unshift()
 * O método UnShift adiciona um ou mais elementos no início da lista
 * Recebe como parâmetro os itens que devem ser adicionados
 * retorna o length da lista atualizada e altera a lista original
 */

 iniciaLista();

 console.log('O método UnShift adiciona um ou mais elementos novos no início da lista');
 console.log('Recebe como parâmetro os itens que devem ser adicionados');
 console.log('Retorna o length da lista atualizada e altera a lista original');
 console.log('lista original:');
 console.log(lista);
 console.log('retorno de lista.unshift() incluindo "Manteiga" no início da lista:');
 console.log(lista.unshift('Manteiga'));
 console.log('lista alterada:');
 console.log(lista);
 
 console.log('---');