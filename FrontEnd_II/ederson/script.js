const formulario = document.querySelector(`#formulario`);
const collectionCards = document.querySelector (`#cards`);

const adicionaCard = function (titulo, ano, descricao, url) {
    const template = `
    <div class="card">
       <img src="${url}" alt="${titulo}" width="550px">
       <h2>${titulo} </h2>
       <p>Ano: ${ano}</p>
       <p>Descrição: ${descricao}</p>
     </div>
    `;

   collectionCards.innerHTML += template;

}

formulario.onsubmit = function (e) {
    var titulo = document.querySelector('#titulo').value;
    var ano = document.querySelector('#ano').value;
    var descricao = document.querySelector('#descricao').value;
    var url = document.querySelector('#url').value;
    adicionaCard(titulo,ano,descricao,url);

    // Previne o comportamento default do evento.
    e.preventDefault();
}

var removerCards = document.getElementById('remove')
removerCards.addEventListener('click', removeCards)

function removeCards(){
    collectionCards.innerHTML='';
}