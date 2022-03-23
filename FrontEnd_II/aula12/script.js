//@alcilene @eder @marcos pires @juliana
// obtem elemento botao
const btnSubmit = document.getElementById('btn-submit');

// obtem input nome
const nome = document.getElementById('nome');

// obtem elementos com name='hobbies'
const hobbies = document.getElementsByName('hobbies')

// obter elemento nacionalidade checked
const nacionalidades = document.getElementsByName('nacionalidade')

// obtem elemento mensagem
const msg = document.getElementById('msg');

const msg_01 = 'Desculpe, ainda não estamos recrutando bruxos no Brasil!<br> Mas chegaremos em breve!';
const msg_02 = 'Nome informado inválido';
const msg_03 = 'Informar no máximo 04 (quatro) hobbies';


// funcao para desabilitar o botao
const funcToggleBtn = function (desab) {
   if (desab) {
      btnSubmit.removeAttribute('disabled');
   } else {
      btnSubmit.setAttribute('disabled', '');
   }
}

// conta hobbies checados
const contaCheckes = function () {
   let cont = 0;
   for (h of hobbies) {
      if (h.checked)
         cont++;
   }
   return cont;
}

// função de revalidacao geral do formulario 
const validacao = function () {
   //valida se possui nome e sobrenome
   let arrNomecompleto = nome.value.split(' ');

   // validaca se possui nome e sobrenome
   if (arrNomecompleto.length > 1) {
      nome.classList.remove('error');
      msg.style.display = 'none';
      msg.innerHTML = '';      
      funcToggleBtn(true);
   } else {
      nome.classList.add('error');
      msg.style.display = 'block';
      msg.innerHTML = msg_02;      
      funcToggleBtn(false);
      return;
   }

   // validaca se nome ou sobrenome menor que 2 
   if (arrNomecompleto[0].length > 1 && arrNomecompleto[1].length > 1) {
      nome.classList.remove('error');
      msg.style.display = 'none';
      msg.innerHTML = '';        
      funcToggleBtn(true);
   } else {
      nome.classList.add('error');
      msg.style.display = 'block';
      msg.innerHTML = msg_02;        
      funcToggleBtn(false);
      return;
   }

   // valida se nome excedeu 150 chars
   if (nome.value.length <= 150 && nome.value !== '') {
      nome.classList.remove('error');
      msg.style.display = 'none';
      msg.innerHTML = '';         
      funcToggleBtn(true);
   } else {
      nome.classList.add('error');
      msg.style.display = 'block';
      msg.innerHTML = msg_02;        
      funcToggleBtn(false)
      return;
   }

   // valida se nome possui nro
   const regexNum = /[0-9]/;
   if (regexNum.test(nome.value)) {
      nome.classList.add('error');
      msg.style.display = 'block';
      msg.innerHTML = msg_02;          
      funcToggleBtn(false)
      return;
   } else {
      nome.classList.remove('error');
      msg.style.display = 'none';
      msg.innerHTML = '';        
      funcToggleBtn(true);
   }

   // valida hobbies
   if (contaCheckes() > 4) {
      msg.style.display = 'block';
      msg.innerHTML = msg_03; 
      funcToggleBtn(false);
      return;
   } else {
      msg.style.display = 'none';
      msg.innerHTML = '';            
      funcToggleBtn(true);
   }

   // valida nacionalidades
   nacionalidades.forEach(el => {
      console.log(el.value);

      if (el.checked === true) {
         if (el.value == 'nacionalidadeBrasileira') {
            // exibe elemento com mensagem
            msg.style.display = 'block';
            msg.innerHTML = msg_01;
            funcToggleBtn(false);
            return;
         }
         // oculta elemento com mensagem
         msg.style.display = 'none';
         msg.innerHTML = '';
         funcToggleBtn(true);
      }
   });
}


// adiciona evento ao sair do campo nome - validacao
nome.addEventListener('change', validacao);

// adiciona evento onchange a todos hobbies - validacao
hobbies.forEach(el => {
   el.addEventListener('change', validacao)
});

// adiciona evento onchange nacionalidade - validacao
nacionalidades.forEach(el => {
   el.addEventListener('change', validacao)
});