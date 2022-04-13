const urlGetUser = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe';
const urlTasks = 'https://ctd-todo-api.herokuapp.com/v1/tasks?';
const jwt = JSON.parse(localStorage.getItem('login')).jwt;

window.onload = function() {
   const novaTarefa = document.getElementById('novaTarea');
   const formNovaTarefa = document.querySelector('.nova-tarefa')
   const userinfo = document.querySelector('.user-info p');
   const skeleton = document.getElementById('skeleton');
   const tarefasPendentes = document.querySelector('.tarefas-pendentes');

   // metodo para obter nome do usuario
   const carregaUsuario = function() {
      const settings = {
         method: 'GET',
         headers: {
            authorization: jwt
         },
      };

      fetch(urlGetUser, settings)
         .then(response => {
            // if (response.status === 201) {
            return response.json()
               // }
               // throw response;
         })
         .then(res => {
            console.log(res);
            atualizaNome(res.firstName, res.lastName);
         })
         .catch(err => {
            console.log(err);
            alert("Falha no login!")
         });
   }

   // funcao ira atualizar nome no userinfo
   const atualizaNome = function(firstname, lastname) {
      userinfo.innerHTML = firstname + ' ' + lastname;
   }

   // metodo para obter lista de tarefas
   const carregaTarefas = function() {
      const settings = {
         method: 'GET',
         headers: {
            authorization: jwt
         }
      };

      fetch(urlTasks, settings)
         .then(response => {
            // if (response.status === 201) {
            return response.json()
               // }
               // throw response;
         })
         .then(tasks => {
            console.log(tasks);
            tasks.forEach(task => {
               montaTarefas(task.description, task.createdAt);
            });
         })
         .catch(err => {
            console.log(err);
            alert("Falha no login!")
         });
   }

   // monta tarefas na tela
   const montaTarefas = function(tarefa, timestamp) {
      // remove visualização do skeleton
      skeleton.style.display = 'none';

      tarefasPendentes.innerHTML += templateTarefa(tarefa, timestamp);
   }

   // retorna template tarefa
   const templateTarefa = function(tarefa, timestamp) {
      return `
         <li class="tarefa">
            <div class="not-done"></div>
            <div class="descricao">
               <p class="nome">${tarefa}</p>
               <p class="timestamp">Criada em: ${timestamp}</p>
            </div>
         </li>      
      `;
   }

   // metodo para criar nova tarefa
   const criarTarefa = function() {
      const data = {
         description: novaTarefa.value,
         completed: false
      };

      const settings = {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
            Authorization: jwt
         },
         body: JSON.stringify(data)
      };

      fetch(urlTasks, settings)
         .then(response => {
            // if (response.status === 201) {
            return response.json()
               // }
               // throw response;
         })
         .then(res => {
            // listar as tarefas
            carregaTarefas();
         })
         .catch(err => {
            console.log(err);
            alert("Falha no login!")
         });
   }

   // obtem usuario
   carregaUsuario();

   // listar as tarefas
   carregaTarefas();

   // adiciona evento de criar ao tarefa ao botan "+"
   formNovaTarefa.addEventListener('submit', function(ev) {
      ev.preventDefault();
      criarTarefa();
   })

}