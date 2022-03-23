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

// funcao para desabilitar o botao
const funcToggleBtn = function(desab) {
   if (desab) {
      btnSubmit.removeAttribute('disabled');
   } else {
      btnSubmit.setAttribute('disabled', '');
   }
}

// evento ao sair do campo nome - validacoes nome
nome.addEventListener('focusout', function(ev) {
   validacao();
})

// conta hobbies checados
const contaCheckes = function() {
   let cont = 0;
   for (h of hobbies) {
      if (h.checked)
         cont++;
   }
   return cont;
}

// evento onchange hobbies
hobbies.forEach(el => {
   el.addEventListener('change', function(ev) {
      if (contaCheckes() > 4) {
         funcToggleBtn(false);
         return;
      }
      funcToggleBtn(true);
      validacao();
   })
});

// evento onchange nacionalidade
nacionalidades.forEach(el => {
   el.addEventListener('change', function(ev) {
      console.log(el.checked);
      if (el.checked === true) {
         if (el.value == 'nacionalidadeBrasileira') {
            funcToggleBtn(false);
            // exibe elemento com mensagem
            msg.style.display = 'block';
            return;
         }
         // oculta elemento com mensagem
         msg.style.display = 'none';
         funcToggleBtn(true);
         validacao();
      }
   })
});

// revalidacao geral do formulario 
const validacao = function() {
   //valida se possui nome e sobrenome
   let arrNomecompleto = nome.value.split(' ');

   if (arrNomecompleto.length >= 2) {
      // se nome ou sobrenome menor que 2 desabilita botao
      if (arrNomecompleto[0].length > 1 && arrNomecompleto[1].length > 1) {
         funcToggleBtn(true);
      } else {
         funcToggleBtn(false);
         return;
      }

      // valida se nome excedeu 150 chars
      if (nome.value.length <= 150 && nome.value !== '') {
         funcToggleBtn(true);
      } else {
         funcToggleBtn(false)
         return;
      }

      // valida se nome possui nro
      const regexNum = /[0-9]/;
      if (regexNum.test(nome.value)) {
         funcToggleBtn(false)
         return;
      } else {
         funcToggleBtn(true);
      }

      // valida hobbies
      if (contaCheckes() > 4) {
         funcToggleBtn(false);
         return;
      } else {
         funcToggleBtn(true);
      }

      // valida nacionalidades
      nacionalidades.forEach(el => {
         if (el.checked === true) {
            if (el.value == 'nacionalidadeBrasileira') {
               funcToggleBtn(false);
               // exibe elemento com mensagem
               msg.style.display = 'block';
               return;
            }
            // oculta elemento com mensagem
            msg.style.display = 'none';
            funcToggleBtn(true);
         }
      });
   }
}