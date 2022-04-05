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

   // configuracao da API, encontrada na tarefa de criar Usuario.

   let configuracaoRequisicao = {
      method: 'POST',
      body: JSON.stringify({
         firstName: nome.value,
         lastName: apelido.value,
         email: email.value,
         password: password.value
      }),
      headers: {
         'Content-type': 'application/json'
      },
   };

   // Chamando a API
   fetch("https://ctd-todo-api.herokuapp.com/v1/users", configuracaoRequisicao)

      .then((response) => {
         // verifica se o status se é 201, que é o status ok. Se não entra no catch.
         if (response.status == 201) {
            return response.json()
         }
         /* Se o código for diferente de sucesso (201), lança um throw para que a execução caia no Catch() */
         throw response;
      }).then(function (resposta) {
         console.log(resposta);
         console.log(resposta.jwt);
         cadastroSucesso(nome.value, apelido.value, email.value, resposta.jwt)
      })
      .catch(error => {
         cadastroErro(error)
      });
}

/*  Ao obter o sucesso, recebe o json (token) do usuário*/


function cadastroSucesso(nome, sobrenome, email, jsonRecebido) {
   localStorage.setItem("user", JSON.stringify({ nome: nome, sobrenome: sobrenome, email: email, token: jsonRecebido }))
   alert("Usuário cadastrado com sucesso")

   // Redireciona pagina inicial para login
   location.href = 'index.html';
}

function cadastroErro(statusRecebido) {
   console.log("Erro ao cadastrar");
   console.log(statusRecebido)
}