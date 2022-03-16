// recebe elemento formulario
const form = document.querySelector('#form');

// recebe container onde serao adicionados os cards
const containerCards = document.querySelector('#container-cards');

// lista que ira receber os objetos cards
var cards = [];

// funcao que cria o template e adiciona o card ao container
const addCard = function (titulo, descricao, url) {
    const template = `
    <div class="card">
       <img src="${url}" alt="${titulo}" >
       <p>${titulo}</p>
       <p>${descricao}</p>
     </div>
    `;

    containerCards.innerHTML += template;
}

// event onsubmit - ao clicar botao de add imagens
form.onsubmit = function (event) {
    var titulo = document.querySelector('#titulo').value;
    var descricao = document.querySelector('#descricao').value;
    var url = document.querySelector('#url').value;

    // criar o card ao clicar em submit
    var card = {
        titulo: titulo,
        descricao: descricao,
        url: url
    };

    // adicionar o card à lista cards
    cards.push(card);

    // executa funcao que add o card ao DOM
    addCard(titulo, descricao, url);

    event.preventDefault();
}

//exemplos de imagens para testes
//https://picsum.photos/id/1024/400/300
//https://picsum.photos/id/237/400/300
//https://picsum.photos/id/1025/400/300
//https://picsum.photos/id/1069/400/300
//https://picsum.photos/id/1074/400/300
//https://picsum.photos/id/1084/400/300
//https://picsum.photos/id/169/400/300