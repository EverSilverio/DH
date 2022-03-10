// Um usuário é solicitado a inserir 3 links de imagem, que serão armazenados em um array
const urlImages = [];

const imagens = document.querySelectorAll('img');

imagens.forEach((_, index) => {
    const url = prompt(`Adicione o url para a imagem ${index + 1}`);

    urlImages.push(url);
});

urlImages.forEach((url, index) => {
    const imagem = document.querySelector(`#image-${index + 1}`);
    const anchor = document.querySelector(`#image-${index + 1}`).parentNode;
    
    anchor.setAttribute('href',  url);
    anchor.setAttribute('target',  '_blank');

    imagem.setAttribute('src', url);


});

const conteudo = document.querySelector('.conteudo');

/*
    const template = `
    <div class="cartao">
        <a class="anchor" href="${url}">
            <img class="image" src="${url}">
        </a>
    </div>
    `;
*/





/*
https://i.picsum.photos/id/789/200/300.jpg?hmac=nu1PpKsVA8Td2PEYonJWrmrriU-Km5XoKoEZQ-Tq-6E
https://i.picsum.photos/id/943/200/300.jpg?hmac=l_-sJ_gPk5DPHAo8YKbzTQnfS3H3H5EXzH3oDsa4bts
https://i.picsum.photos/id/1022/200/300.jpg?hmac=aNF88Nsdk9EmnsePe4aC2RixmOVmUOYF415sTFjWFBM
*/
