// Grupo: 04
// Guilherme Tourinho
// Everton Silverio
// Lucas A Figueiredo
// Eduardo Russo
// J. felipe S. Barbosa

const main = document.querySelector('main');
const url = 'https://randomuser.me/api/?results=10';

// FAZ A CHAMADA DA URL DA API RANDOMUSER
fetch(url)
    .then(resp => resp.json())
    .then(function (data) {
        renderizarDadosUsuario(data);
    })
    .catch(function () {
        console.log(error);
    });

function renderizarDadosUsuario(dados) {
    /* -------------------------------- TAREFAS -------------------------------- */
    // Aqui  devem desenvolver uma função que é exibida na tela:
    // a foto, o nome completo do usuário e seu e-mail.
    //  Isso deve ser baseado nas informações que chegam até nós e  são inseridas no HTML.
    //  Dica: você pode manipular o CSS e estruturar o card ao seu gosto.

    // loop na lista de usuarios
    dados.results.forEach(element => {

        // obtem resultado do usuario e armazena em usuario
        const user = element;

        console.log(user);

        // obtem nome completo
        const nomeCompleto =
            // user.nome.titulo + ' ' + 
            user.name.first + ' ' +
            user.name.last;

        // obtem email
        const email = user.email;

        // obtem foto
        const foto = user.picture.large;

        // cria template card
        const card = templateCard(nomeCompleto, email, foto);

        // incluir card no HTML
        main.innerHTML += card;

    });
}

// template do card
const templateCard = function (nome, email, img) {
    return `
    <div class="tarjeta">
        <img class="imgcard" src="${img}" >
        <div class="card">
            <div class="ident">
                <p class="nome">${nome}</p>
                <p class="email">${email}</p>
            </div>
        </div>
    </div>    
    `;

}