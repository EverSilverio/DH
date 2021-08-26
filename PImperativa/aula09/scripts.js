/**
 * Microndas 
*/
var comida = "";
var tempo = 0;

var display = document.getElementById('display');

function desligarMicroondas() {
    display.innerHTML = '<p>Microondas Desligado...<p/>';
    document.getElementById("comida").value = "";
    document.getElementById("tempo").value = "";
}

function clickLigarMicroondas() {
    display.innerHTML = '<p>Microondas Ligado...<p/>';

    comida = document.getElementById("comida").value;
    tempo = parseInt(document.getElementById("tempo").value);

    if (comida === '') {
        atualizaDisplay("Informe uma refeição");
    } else if (typeof tempo != 'number'){
        console.log(tempo, typeof tempo);
        atualizaDisplay("Informe um tempo válido");
    } else {
        //executa funcao usarMicrondas
        usarMicroondas(comida, tempo);        
    }

}

function atualizaDisplay(texto) {
    display.innerHTML += '<p>' + texto + '</p>';
}


function usarMicroondas(comida, tempo) {
    let pratoListado = false;
    let tempoPadrao = 0;

    let comidas = [
        {nome: 'pipoca', tempo: '10'},
        {nome: 'macarrao', tempo: '8'},
        {nome: 'carne', tempo: '15'},
        {nome: 'feijao', tempo: '12'},
        {nome: 'brigadeiro', tempo: '8'}
    ];
    atualizaDisplay('Selecionado opção: Preparar ' + comida + ' em ' + tempo + ' segundos...');

    // verifica na lista se existe o prato
    // se existir armazena o tempo padrao em variavel e atualiza variavel de pratoListado = true
    comidas.forEach(item => {
        if (item.nome === comida) {
            pratoListado = true;
            tempoPadrao = item.tempo;
        }
    });
    
    if (!pratoListado) { // Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente"
        atualizaDisplay('Prato inexistente');
    } else if (tempo >= (tempoPadrao * 3)) { // Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
        atualizaDisplay('K A B U M ! ! ! Vamos precisar de outro microondas! :x');
    } else if (tempo > (tempoPadrao * 2)) { // Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou
        atualizaDisplay('Sua comida queimou! :(');
    } else if (tempo < tempoPadrao) { // Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"
        atualizaDisplay('Tempo informado insuficiente! Tempo sugerido é ' + tempoPadrao + ' segundos');
    } else {
        atualizaDisplay('Prato pronto, bom apetite!!! ;)');
    }
}


