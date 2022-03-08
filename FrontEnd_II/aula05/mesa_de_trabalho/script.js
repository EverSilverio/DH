const btnSwitch = document.querySelector('#mode');
const modeSwitch = function() {
    document.body.classList.toggle('dark')
}

// adicionar evento change e metodo modeSwitch
btnSwitch.addEventListener('change', modeSwitch);