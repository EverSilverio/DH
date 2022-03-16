document.body.innerHTML = `
<form action ="submit" id="formulario" >
<h1> FORMULARIO </h1>
<div>
<label for= "input1"><strong>Nome:</strong></label>
<input type="text" name="input1" id="nome" >
</div>
<div>
<label for= "email"><strong>Email: </strong></label>
<input type="text" name="input2" id="email" >
</div>
<div>
<label for= "password"><strong>Senha: </strong></label>
<input type="password" name="input2" id="password" >
</div>
<div>
<button type="submit" id="enviar">Enviar</button>
<button type="reset" id="limpar">Limpar dados</button>
</div>
</form>
<div class="texto">
<h2 class="text">Passe o mouse para mudar de cor!</h2>
</div>
`

let formulario = document.querySelector(`#formulario`);
let texto = document.querySelector(`.text`);
const inputNome = document.querySelector('#nome');

// cria elementos <p> para receber captura de texto input e nome e qtd caracteres digitados
const textoDigitado = document.createElement('p');
const numeroCaracteres = document.createElement('p');

// variavel q recebe qtd caracteres digitados
var cont = 0; 

// add ao formulario os elementos <p> criados
formulario.appendChild(textoDigitado);
formulario.appendChild(numeroCaracteres);

formulario.addEventListener(`onsubmit`, function (event) {
    event.preventDefault();
});

window.onload = function () {
    alert('A tela foi carregada')
}

texto.onmouseover = function () {
    texto.style.color = "red";
}

texto.onmouseout = function () {
    texto.style.color = "yellow";
}

inputNome.onkeypress = function (e) {
    cont ++;
    textoDigitado.innerHTML += e.key;
    numeroCaracteres.innerHTML = cont;
}

