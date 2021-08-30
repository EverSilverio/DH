# Aula 10 - Programação imperativa

## Strings e Arrays: Trabalhando com Coleções

### Strings

---

**String.length**

_Retorna o número de unidades de código presentes na string_

>str.lenght

Exemplo:
```javascript
let mensagem = 'Bem vindo ao Javascript!';
console.log(mensagem.lenght);
//retorna 24
```
---
**String.indexOf()**

_O método indexOf() retorna o índice da primeira ocorrência do valor fornecido em searchValue, começando a busca a partir de fromIndex. Retorna -1 se o valor não for encontrado._

>str.length(searchValue[, fromIndex])

**Parâmetros:**

* searchValue: Uma string representando o valor a ser buscado.
* fromIndex: Um número inteiro representando um índice da string original a partir da qual a busca deve começar. Por padrão é 0

Exemplo:
```javascript
var anyString = "Brave new world";

console.log("O índice do primeiro w partindo do começo é " + anyString.indexOf("w"));
// Exibe 8

console.log("O índice de 'new' partindo do começo é " + anyString.indexOf("new"));
// Exibe 6

console.log("O índice de 'old' partindo do começo é " + anyString.indexOf("old"));
// Exibe -1 pois não encontrou a sequencia
```

---

**String.Slice()**

_O método slice() extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original._

>str.slice(startIndex[, endIndex])

**Parâmetros:**

* startIndex: Índice de base 0, onde se inicia a extração. Se negativo sera o mesmo que (str.length + startIndex). Se por exemplo, for informado -2 é o mesmo que (str.length - 2);
* endIndex: _Opcional_ É o índice de base 0, onde se termina a extração. Se omitido, _undefined_ ou maior que o length, extrairá até o fim da string. Se negativo segue lógica (str.length + endIndex).

Exemplo:
```javascript
var str1 = 'O essencial é invísivel aos olhos', // o tamanho de str1 é 33
    str2 = str1.slice(2, 11),
    str3 = str1.slice(12, -10),
    str4 = str1.slice(28),
    str5 = str1.slice(34);
console.log(str2); // retorna 'essencial'
console.log(str3); // retorna 'é invisível', da posição 12 à 23 (33-10)
console.log(str4); // retorna 'olho', da posição 28 até o fim
console.log(str5); // retorna <empty string>, valor maior que o tamanho da string
```

---

**String.trim()**

_Método **trim()** remove os espaços em branco do início e do fim da string (espaços e tabulações). Não altera o valor da string original._

> str.trim() 

Exemplo:
```javascript
let exemplo = '   Um texto qualquer !   ';
console.log(exemplo.trim()); // retorna 'Um texto qualquer !'
```

---

**String.Split()** 

_O método **split()** divide uma string em uma lista ordenada de strings, considerando um separador_

>str.split([separador[, limite]])

**Parâmetros:**
* separador: _Opcional_ por ser um caracter ou uma sequência de caracteres
* limite: _Opcional_ um número inteiro que represente o límite de divisões

Exemplo:
```javascript
let meses = 'Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez'
meses.split(',') 
// retorna um array com os meses ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
meses.split(',', 6) //retorna um array com apenas os 6 primeiros meses ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"]

let listaFesta = 'Mesas||Cadeiras||Talheres||Bebidas||Balões';
console.log(listaFesta.split('||'))
// retorna um array com ["Mesas", "Cadeiras", "Talheres", "Bebidas", "Balões"]

```

**String.replace()**

_O método replace() retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres). A string original não é modificada._

> str.replace(searchvalue, newvalue)

Exemplo:
```javascript
let str = "Aprendendo Python!";
console.log(str.replace("Python", "Javascript"))
//retorna "Aprendendo Javascript!"
```

---

### Arrays

Arquivo: [arrays.js](https://github.com/)

Posições / Tamanhos / Manipulação

```javascript
.length()

.indexOf()

.lastIndexOf()

.push()

.pop()

.shift()

.unshift()

.join()

.includes()

```

---

### Loop For

__O laço For__

O For possuie a seguinte sintax:

```javascript
for (Parâmetro 1; Parâmetro 2; Parâmetro 3) {
  // code block to be executed
}
```

Parâmetro 1 é executado (uma vez) antes da execução do bloco de código.

Parâmetro 2 define a condição para executar o bloco de código

Parâmetro 3 é executado (todas as vezes) após a execução do bloco de código.

```javascript
// será iniciado o i = 0
// o loop será executado enquanto o i for menor que array.length (tamanho do array)
// ao fim de cada bloco será somado 1 ao i (i++)

for (let i = 0; i < array.length; i++) {
    const element = array[i];
}

```