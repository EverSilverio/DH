// obtem elemento formulario
const form = document.getElementById('form');

// obtem container dos cards
const containerImages = document.querySelector('.container--images');

// obtem elementos inputs 
const inputTitulo = document.getElementById('titulo');
const inputDescricao = document.getElementById('descricao');
const inputUrl = document.getElementById('url');

// define template imagens
const templateCard = (tit, descri, url) =>
    `  <h3>${tit}</h3>
       <span class="close">remover card</span>
       <img src="${url}" alt="${tit}">
       <p>${descri}</p>
    `;

// evento onSubmit formulario
form.onsubmit = function (e) {
    // chama funcao de template passando campos variavies e retornar valor para "image"
    let image = templateCard(
        inputTitulo.value,
        inputDescricao.value,
        inputUrl.value
    );
    
    // cria nó div para receber o card
    let card = document.createElement('div');
    
    // adiciona classe cards para o nó criado
    card.className = 'cards';

    // adiciona template image ao nó card
    card.innerHTML = image;
    
    // faz append do card ao container de imagens
    containerImages.appendChild(card);

    // obtem elemento close
    let close = card.querySelector('.close');
    
    // adiciona evento de click ao close, passando o no para ser removido
    close.addEventListener('click', function () {
        containerImages.removeChild(card);
    })

    // previne o comportamento default do evento (submit)
    e.preventDefault();
}

// obtem elemento exemplo de url
const urlSample = document.getElementById('url-sample');

// adiciona evento onclick para adicionar texto de exemplo no Input URL
urlSample.onclick = function (e) {
    inputUrl.value = urlSample.innerText;
};


//exemplo de imagens
//https://picsum.photos/id/1024/400/300
//https://picsum.photos/id/237/400/300
//https://picsum.photos/id/1025/400/300
//https://picsum.photos/id/1069/400/300
//https://picsum.photos/id/1074/400/300
//https://picsum.photos/id/1084/400/300
//https://picsum.photos/id/169/400/300
