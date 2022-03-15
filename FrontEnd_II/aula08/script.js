/*
EXEMPLO COM NODE E CREATELEMENT
const btnOk = document.createElement('button', {type: 'submit'});
const textoOk = document.createTextNode('Ok');
const form = document.createElement('form');

btnOk.appendChild(textoOk);
form.appendChild(btnOk);
document.body.appendChild(form);
*/

var cont = 0;

document.body.innerHTML = `
<form action="submit" id="form">
<label for="name">Nome</label>
<input type="text" name="name" id="name" value="Everton">

<label for="email">E-mail</label>
<input type="text" name="email" id="email">

<p id="texto_email"></p>
<p id="char_email"></p>

<button type="reset">Cancel</button>
<button type="submit">Ok</button>
</form>
`;

const form = document.querySelector('#form');
const nome = document.querySelector('#name');
const email = document.querySelector('#email');
const texto_email = document.querySelector('#texto_email');
const char_email = document.querySelector('#char_email');

form.onsubmit = function (event) {
    event.preventDefault();
}

nome.onmouseover = function (event) {
    nome.style.color = "red";
}

nome.onmouseout = function (event) {
    nome.style.color = "blue";
}

window.onload = function() {
    alert('Tela Carregada');
}

email.onkeypress = function (event) {
    texto_email.innerHTML += event.key;
    cont += 1;
    char_email.innerHTML = cont;
    
}