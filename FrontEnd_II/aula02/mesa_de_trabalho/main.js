// lista auxiliar para exibir descrição conforme as escolhas 
// pedra (indice 0), papel (indice 1) ou tesoura (indice 2)
let lista = ['Pedra', 'Papel', 'Tesoura'];

// variaveis que armazenam pontuação para exibir resultado final
var userPoint = 0;
var machinePoint = 0;

// função de inicio de jogo - chamada pelo botao "Iniciar Jogo"
function startGame(params) {
    userPoint = 0;
    machinePoint = 0;

    // loop que é executado enquanto nenhum jogador atinge 2 pontos (melhor de 3)
    do {
        let user = userChoise();
        let machine = machineChoise();

        roundGame(user, machine);
    } while (userPoint < 2 && machinePoint < 2);

    endGame();
}

// abre prompt para usuário informar sua escolha
function userChoise() {
    let choiseUser = parseInt(prompt('Pedra (1) Papel (2) Tesoura (3)'));
    return choiseUser;
}

// calcula randomicamente uma opção para maquina (pedra (1), papel (2) ou tesoura (3))
function machineChoise() {
    let choiseMachine = parseInt(Math.random() * 3 + 1);
    return choiseMachine;
}

// função de cálculo de cada rodada
// atualiza a pontuação e mostra mensagem da rodada
function roundGame(choiseUser, choiseMachine) {
    let message = '';
    switch (choiseUser) {
        case 1:
            if (choiseMachine == 2) {
                message = "Xii, você perdeu a rodada!";
                machinePoint += 1;
            } else if (choiseMachine == 3) {
                message = "Uau, você ganhou a rodada!";
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

// exibe resultado final com base nas variaveis de pontuacao
function endGame() {
    if (userPoint > machinePoint) {
        alert('Parabéns, você venceu!')
    } else {
        alert('Não foi dessa vez, tente de novo!')
    }
}