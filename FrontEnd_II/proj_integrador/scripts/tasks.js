const urlGetUser = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe';
const urlTasks = 'https://ctd-todo-api.herokuapp.com/v1/tasks?';
const jwt = JSON.parse(localStorage.getItem('login')).jwt;

// metodo handle status tarefa
function alteraStatus(btn, status) {
   console.log(btn.querySelector('i').getAttribute('id'));
   // const data = {
   //    description: novaTarefa.value,
   //    completed: false
   // };

   // const settings = {
   //    method: 'POST',
   //    headers: {
   //       'content-type': 'application/json',
   //       Authorization: jwt
   //    },
   //    body: JSON.stringify(data)
   // };
}

window.onload = function() {
   const novaTarefa = document.getElementById('novaTarea');
   const formNovaTarefa = document.querySelector('.nova-tarefa')
   const userinfo = document.querySelector('.user-info p');
   const skeleton = document.getElementById('skeleton');
   const tarefasPendentes = document.querySelector('.tarefas-pendentes');
   const tarefasTerminadas = document.querySelector('.tarefas-terminadas');

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
               montaTarefas(task);
            });
         })
         .catch(err => {
            console.log(err);
            alert("Falha no login!")
         });
   }

   // monta tarefas na tela
   const montaTarefas = function(task) {
      // remove visualização do skeleton
      skeleton.style.display = 'none';

      let date = new Date(task.createdAt);
      date.toLocaleDateString('pt-BR');

      // console.log(date.getFullYear());
      date = date.getDate() +
         "/" + (date.getMonth() + 1) +
         "/" + date.getFullYear();

      if (task.completed) {
         tarefasTerminadas.innerHTML += templateTarefa(task, date);
         let elementoCriado = document.querySelector(`#id${task.id} .descricao div button`);

         elementoCriado.addEventListener('click', function(ev) {
            console.log('click');
         })

         console.log(elementoCriado);

      } else {
         tarefasPendentes.innerHTML += templateTarefa(task, date);
      }
   }

   // retorna template tarefa
   const templateTarefa = function(task, date) {
      let template = '';

      if (task.completed) {
         template = `
         <li class="tarefa" id="id${task.id}">
            <div class="done"></div>
            <div class="descricao">
            <p class="nome">${task.description}</p>
            <div>
               <button ><i class="fas fa-undo-alt change"></i></button>
               <button><i class="far fa-trash-alt"></i></button>
            </div>
            </div>
         </li>
         `;
      } else {
         template = `
         <li class="tarefa">
            <div class="not-done"></div>
            <div class="descricao">
               <p class="nome">${task.description}</p>
               <p class="timestamp">Criada em: ${date}</p>
            </div>
         </li>      
      `;
      }

      return template;
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
            tarefasPendentes.innerHTML = '';
            tarefasTerminadas.innerHTML = '';

            carregaTarefas();
            novaTarefa.value = '';
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