let personagem = {
    nome: "Michael",
    sobrenome: "Scott",
    nascimento: {
        data: "15/04/1965",
        cidade: "Scranton",
        estado: "Pensilvânia"
    },
    imagenUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/MichaelScott.png/220px-MichaelScott.png",
    trabalho: {
        cargo: "Regional Manager",
        empresa: "Dunder Mifflin"
    }
};

escreverPersonagem();

function escreverPersonagem() {
    const body = document.getElementById('body');

    const myTemplate = `
        <div id="personagem">
            <h1>Personagem</h1>
            <p>Nome: <b>${personagem.nome}</b> Sobrenome: <b>${personagem.sobrenome}</b> </p>
            <hr>
            <h2>Nascimento</h2>
            <p>Data: <b>${personagem.nascimento.data}</b> </p>
            <p>Cidade: <b>${personagem.nascimento.cidade}</b> Estado: <b>${personagem.nascimento.estado}</b></p>
            <img src="${personagem.imagenUrl}" >
            <br>
            <h2>Trabalho</h2>
            <p>Cargo: <b>${personagem.trabalho.cargo}</b> </p>
            <p>Empresa: <b>${personagem.trabalho.empresa}</b> </p>
        </div>
    `;

    body.innerHTML = myTemplate;    
}

