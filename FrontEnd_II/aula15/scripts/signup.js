// Equipe 4
// Lucas Rosa
// Guilherme Brasil Tourinho
// Joaderson Felipe Silva Barbosa
// Everton Silverio
// Eduardo Russo

function criarUsuario(ev) {

   const nome = document.querySelector("#nome");
   const apelido = document.querySelector("#apelido");
   const email = document.querySelector("#email");
   const password = document.querySelector("#password");
   const password2 = document.querySelector("#password2");

   if (nome.value.length < 4) {
      alert("Nome Falhou")
      return;
   }

   if (apelido.value.length < 4) {
      alert("Apelido Falhou")
      return;
   }

   if (
      (!/.com$/.test(email.value) && !/.com.br$/.test(email.value)) ||
      !email.value.includes('@')
   ) {
      alert("Email Falhou")
      return;
   }

   if (password.value.length < 8 && password.value.length > 12) {
      alert("Senha Falhou")
      return;
   }

   if (password.value != password2.value) {
      alert("Senha2 Falhou")
      return;
   }

   let strg = [nome.value, apelido.value, email.value, password.value];

   localStorage.setItem("conta", strg);

   alert("Conta Criada com Sucesso");

   location.href = 'index.html';

}