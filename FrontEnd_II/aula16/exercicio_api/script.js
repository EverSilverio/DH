

    function createNode(element) {

        return document.createElement(element);

    }

    //Essa função irá acrescentar el ao parent usando o document.createElement:

    function append(parent, el) {
        return parent.appendChild(el);
    }




const ul = document.getElementById('authors');



// selecionamos a ul criada no html pelo id

const url = 'https://randomuser.me/api/?results=10';

//Para usar a Fetch API, chame o método fetch, que aceita a URL da API como um parâmetro:

fetch(url).then((resp) => resp.json())

.then(function (data) {
    
    console.log(data);
        //Para cada autor em authors, será criado um item de lista que exibe uma figura o nome deles. O método map() é ótimo para isso:

        let authors = data.results;

        // Dentro de sua função map, crie uma variável chamada li que será definida igual a createNode com li (o elemento HTML) como o argumento:
        return authors.map(function (author) {

            let li = createNode('li');

            // A API oferece um nome para o author e uma imagem que acompanha o nome. Defina img.src para a imagem do autor:


            let img = createNode('img');
            let span = createNode('span');
            // A API oferece um nome para o author e uma imagem que acompanha o nome. Defina img.src para a imagem do autor:

            img.src = author.picture.medium;


            // O elemento span deve conter o primeiro e último nome de author. A propriedade innerHTML e a interpolação de strings permitirão fazer isso:
            span.innerHTML = `${author.name.first} ${author.name.last}`;

            //Com a imagem e o elemento de lista criados juntamente com o elemento span, use a função append criada anteriormente para exibir esses elementos na página:
            append(ul, li);
            append(li, img);
            append(li, span);

        })

            .catch(function () {
                console.log(error);
            });


        // O método fetch() retorna uma promessa. Se a promessa retornada for resolve, a função dentro do método then() é executada. Essa função contém o código para lidar com os dados recebidos da API.

        // Com ul e url instalados, é hora de criar as funções que serão usadas para criar os itens de lista. Crie uma função chamada createNode que recebe um parâmetro chamado element:


        //Dentro da função, adicione uma instrução return que retorna o element usando document.createElement():

    
    });
