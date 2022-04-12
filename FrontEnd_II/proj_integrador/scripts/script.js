const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const urlLogin = 'https://ctd-todo-api.herokuapp.com/v1/users/login';

function entrar(ev) {

   let email = inputEmail.value.toLowerCase();
   inputEmail.value = email;
   let pass = inputPassword.value

   if (regexMail.test(email)) {
      const data = {
         email: email,
         password: pass,
      };

      const settings = {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(data),
      };

      fetch(urlLogin, settings)
         .then(response => {
            if (response.status === 201) {
               return response.json()
            }
            throw response;
         })
         .then(info => {
            localStorage.setItem('login', JSON.stringify({ email: email, jwt: info.jwt }));

            console.log(info)
            alert("Login efetuado com sucesso!")
            location.href = 'tarefas.html';
         })
         .catch(err => {
            console.log(err);
            alert("Falha no login!")
         });
   } else {
      alert("Formato de email invalido")
   }
}