const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');

function entrar(ev) {

   let email = inputEmail.value.toLowerCase();
   inputEmail.value = email;
   let pass = inputPassword.value

   if (pass.length >= 8 && pass.length < 12 && /.com$/.test(email)) {
      localStorage.setItem('login', email)
      alert("Login efetuado com sucesso!")

      location.href = 'tarefas.html';
   } else {
      alert("login não efetuado.")
   }
}