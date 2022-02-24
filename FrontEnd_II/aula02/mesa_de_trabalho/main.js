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
        let user = userchoice();
        let machine = machinechoice();

        roundGame(user, machine);
    } while (userPoint < 2 && machinePoint < 2);

    endGame();
}

// abre prompt para usuário informar sua escolha
function userchoice() {
    let choiceUser = parseInt(prompt('Pedra (1) Papel (2) Tesoura (3)'));
    return choiceUser;
}

// calcula randomicamente uma opção para maquina (pedra (1), papel (2) ou tesoura (3))
function machinechoice() {
    let choiceMachine = parseInt(Math.random() * 3 + 1);
    return choiceMachine;
}

// função de cálculo de cada rodada
// atualiza a pontuação e mostra mensagem da rodada
function roundGame(choiceUser, choiceMachine) {
    let messageLose = "Xii, você perdeu a rodada!";
    let messageWin = "Uau, você ganhou a rodada!";

    if (choiceUser === choiceMachine) {
        alert(`Ambos escolheram ${lista[choiceUser-1]}! \nDeu Empate!`);
    } else {
        switch (choiceUser) {
            case 1:
                if (choiceMachine == 2) {
                    alertScreen('machine', choiceUser, choiceMachine, messageLose);
                } else if (choiceMachine == 3) {
                    alertScreen('user', choiceUser, choiceMachine, messageWin);
                }
                break;
            case 2:
                if (choiceMachine == 3) {
                    alertScreen('machine', choiceUser, choiceMachine, messageLose);
                } else if (choiceMachine == 1) {
                    alertScreen('user', choiceUser, choiceMachine, messageWin);
                }
                break;
            case 3:
                if (choiceMachine == 1) {
                    alertScreen('machine', choiceUser, choiceMachine, messageLose);
                } else if (choiceMachine == 2) {
                    alertScreen('user', choiceUser, choiceMachine, messageWin);
                }
                break;
            default:
                alert(`Opção escolhida é invalida! \nEscolha corretamente!`)
        }
    }
}

// funcao alerta
function alertScreen(winner, choiceUser, choiceMachine, message) {
    if (winner === 'machine') {
        machinePoint += 1;
    } else {
        userPoint += 1;
    }
    alert(`Você escolheu ${lista[choiceUser-1]} e a máquina escolheu ${lista[choiceMachine-1]}! \n${message}`)
}

// exibe resultado final com base nas variaveis de pontuacao
function endGame() {
    if (userPoint > machinePoint) {
        alert('Parabéns, você venceu!')
    } else {
        alert('Não foi dessa vez, tente de novo!')
    }
}