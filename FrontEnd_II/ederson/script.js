const formulario = document.querySelector(`#formulario`);
const collectionCards = document.querySelector (`#cards`);

const adicionaCard = function (titulo, descricao, url) {
    const template = `
    <div class="card">
       <img src="${url}" alt="${titulo}" width="400px">
       <p>${titulo}</p>
       <p>${descricao}</p>
     </div>
    `;

   collectionCards.innerHTML += template;

}

formulario.onsubmit = function (e) {
    var titulo = document.querySelector('#titulo').value;
    var descricao = document.querySelector('#descricao').value;
    var url = document.querySelector('#url').value;
    adicionaCard(titulo,descricao,url);

    // Previne o comportamento default do evento.
    e.preventDefault();
}