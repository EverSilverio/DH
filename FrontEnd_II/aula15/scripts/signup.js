// Equipe 4
// Lucas Rosa
// Guilherme Brasil Tourinho
// Joaderson Felipe Silva Barbosa
// Everton Silverio
// Eduardo Russo

// Utilizar no exercício:
// validação [x] | normalização [x] | location | localStorage

const nome = document.getElementById("nome");
const apelido = document.getElementById("apelido");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function criarUsuario(ev) {
   // normalização email
   email.value = email.value.toLowerCase();

   // validações do formulario
   // nome
   if (nome.value.length < 4 || nome.value.split(' ').length < 2) {
      nome.focus();
      alert("Nome Inválido, informar nome e sobrenome!")
      return;
   }

   // apelido
   if (apelido.value.length < 4 || apelido.value.length > 50) {
      apelido.focus();
      alert("Apelido deve ter mais de 4 caracteres menos que 50!")
      return;
   }

   // email
   if (!regexMail.test(email.value)) {
      email.focus();
      alert("Email Inválido")
      return;
   }

   // password
   if (password.value.length < 8 || password.value.length > 12) {
      password.focus()
      alert("Senha deve ter entre 8 e 12 caracteres!")
      return;
   }

   // repetir a senha
   if (password.value != password2.value) {
      password2.focus();
      alert("As senha devem ser iguais!")
      return;
   }

   // armazena dados do login 
   //--- ATENÇÃO!! SENHA TB ESTÁ SENDO GRAVADA PARA EFEITOS DIDÁTICOS, MAS NÃO É RECOMENDADO

   let strg = [nome.value, apelido.value, email.value, password.value];
   localStorage.setItem("conta", strg);
   alert("Conta Criada com Sucesso");

   // Redireciona pagina
   location.href = 'index.html';
}