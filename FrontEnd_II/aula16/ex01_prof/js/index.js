console.log("Bem vindos a DH Bank Digital");



const minhaPrimeiraPromessa = new Promise((resolve, reject) => {

    // Chamamos resolve(...) quando o que estávamos fazendo é concluído com sucesso e reject(...) quando falha.
    // Neste exemplo, usamos setTimeout(...) para simular código assíncrono, ou seja, uma requisição ao servidor.
    // A variável contaBancaria simula as informações do banco de dados.
    // No dia a dia , vamos recorrer a um fetch() [que será visto na próxima aula].

    const contaBancaria = {

        estado: "ativo",
        usuario: "Michel Polsan",
        valorPoupanca: 1
    };


    setTimeout(function () {


        if (contaBancaria.valorPoupanca < 1) {

            reject({

                mensagem: "Fundos insuficientes na conta"

            });
        } else if (contaBancaria.estado != "ativo") {

            reject({

                mensagem: " A sua conta nao se encontra ativa."
            });

        } else {

            resolve({
                mensagem: " A transacao foi realizada com exito."
            });
        }


    }, 2500);




});


let tentativa;

const caixa = document.querySelector('.bancaMobile')

minhaPrimeiraPromessa.then((resposta) => {

    tentativa = resposta;

    caixa.innerHTML = `<h4> ${tentativa.mensagem} </h4>`
    console.log(tentativa);


}).catch((err) => {

    tentativa = err;

    caixa.innerHTML = `<h4> ${tentativa.mensagem} </h4>`

    console.log(err);

})