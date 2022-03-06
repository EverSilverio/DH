function escreverHTML(title, text) {
    const body = document.getElementById('body');

    const myTemplate = `
        <h1>${title}</h1>
        <p>${text}</p>
    `;

    body.innerHTML += myTemplate;
}

escreverHTML('Sou um Título', 'Eu sou um parágrafo, posso ser curto ou longo!');
escreverHTML('Olá', 'Lorem ipsum dolor sit amet consectetur adipisicing elit')
escreverHTML('Outro', 'Quas similique tempora, eos minima commodi, dolorem illo deleniti pariatur, dolores ea sed!');
escreverHTML('Linha 4', 'Quas similique tempora, eos minima commodi, dolorem illo deleniti pariatur, dolores ea sed! Repellendus mollitia rerum eos hic. Odit eos ducimus necessitatibus!');

