// ENTRADA DE TECLADO USER - x
// ESCOLHA MAQUINA - x
// CALCULO RESULTADO DA RODADA - SWITCH - x
// RESULTADO DA RODADA - nao tem, dentro do switch
// MENSAGEM FINAL

let lista = ['Pedra', 'Papel', 'Tesoura'];

var userPoint = 0;
var machinePoint = 0;

// startGame();

function startGame(params) {
    userPoint = 0;
    machinePoint = 0;
    do {
        let user = userChoise();
        let machine = machineChoise();

        roundGame(user, machine);
    } while (userPoint < 2 && machinePoint < 2);

    endGame();
}

function userChoise() {
    let choiseUser = parseInt(prompt('Pedra (1) Papel (2) Tesoura (3)'));
    return choiseUser;
}

function machineChoise() {
    let choiseMachine = parseInt(Math.random() * 3 + 1);
    return choiseMachine;
}

function roundGame(choiseUser, choiseMachine) {
    let message = '';
    switch (choiseUser) {
        case 1:
            if (choiseMachine == 2) {
                message = "Xii, você perdeu!";
                machinePoint += 1;
            } else if (choiseMachine == 3) {
                message = "Uau, você ganhou!";
                userPoint += 1;
            } else {
                message = "Deu empate"
            }
            break;
        case 2:
            if (choiseMachine == 3) {
                message = "Xii, você perdeu a rodada!";
                machinePoint += 1;
            } else if (choiseMachine == 1) {
                message = "Uau, você ganhou a rodada!";
                userPoint += 1;
            } else {
                message = "Deu empate"
            }
            break;
        case 3:
            if (choiseMachine == 1) {
                message = "Xii, você perdeu a rodada!";
                machinePoint += 1;
            } else if (choiseMachine == 2) {
                message = "Uau, você ganhou a rodada!";
                userPoint += 1;
            } else {
                message = "Deu empate"
            }
            break;
        default:
            break;
    }
    alert(`Você escolheu ${lista[choiseUser-1]} e a máquina escolheu ${lista[choiseMachine-1]}! \n${message}`)
}

function endGame() {
    if (userPoint > machinePoint) {
        alert('Parabéns, você venceu!')
    } else {
        alert('Não foi dessa vez, tente de novo!')
    }
}