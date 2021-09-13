# Objetos Literais

Como vimos, os objetos são uma das estruturas mais importantes da programação, tanto que há toda uma área dedicada à programação baseada neles, para entender um pouco mais por que eles são tão úteis e importantes, vamos realizar uma série de práticas para fortalecer melhor as particularidades e utilidades que vêm com eles.

## Descrição do problema
A partir de um banco eles entram em contato conosco para criar um aplicativo que possa facilitar o manuseio de informações e facilitar as ações que ele precisa. 
Nosso líder de tecnologia nos pede para pensar em como representar usuários, ou contas bancárias, em vez disso. Cada uma dessas contas tem as seguintes informações:

* Número da conta (somente números)
* Tipo de conta (conta corrente ou poupança em $)
* Saldo em $ (valor apenas)
* Titular da conta (nome completo)

Com essa informação em mente, somos solicitados a fazer o seguinte.
1. Pense na melhor forma de representar tais contas, e por quê? (discutir com a equipe sobre as diferentes estruturas e qual é a mais conveniente)

2. Uma vez decidido qual será o tipo de dados para representar as contas das contas, crie uma conta de teste e verifique se as propriedades mencionadas acima são criadas corretamente.
3. Agora que sabemos como representar usuários e suas contas, o cliente nos forneceu uma lista de contas que devemos ser capazes de criar. Para isso, devemos gerar uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente.
O líder tecnológico está muito feliz com nosso trabalho até agora. A essa altura já temos um banco de dados com 10 clientes do banco, provavelmente alojados em 10 variáveis diferentes (assumindo que cada variável é um objeto que foi criado com uma função construtora). A partir disso, eles nos pedem as seguintes características.
4. A partir dos 10 usuários, gereuma lista onde todos eles convergem (lista de objetos)
5. Também nos pedem a criação de um objeto literal chamado banco que terá uma propriedade chamada clientes, ele será composto pela lista de objetos
gerados no ponto anterior.
6. o objeto do banco criará um método chamado consultarCliente que receberá um nome (titular) por parâmetro e deve pesquisar na lista de contas e retornar ao objeto do cliente que corresponde a esse nome inserido.
7. Crie outro método chamado depósito que receberá como parâmetros, o titular da conta e uma quantidade de dinheiro para depositar. O método deve chegar à conta correspondente e, em seguida, adicionar a quantidade de dinheiro para depositar o saldo da conta, então você deve dar um aviso pelo console com a mensagem "Depósito realizado, seu novo saldo é: xxx".
8. Crie um último método chamado saque que também receberá dois parâmetros, o titular da conta e o valor a ser extraído. O método deve obter a
conta correspondente e subtrair o valor do saldo atual. Caso o resultado seja inferior a 0, você deve imprimir uma mensagem através do console de "Fundos insuficientes";, caso contrário você deve imprimir "Extração feita com sucesso, seu novo saldo é: xxx";

Se você chegou aqui parabéns, a equipe de desenvolvimento e o líder técnico estão impressionados com o seu trabalho!

# Bônus extra

Para que você não fique com o desejo ou que você possa continuar praticando se quiser, propomos um pouco (ou algum) exercício mais, tenha em mente que daqui os exercícios podem subir em dificuldade; como sempre dizemos, paciência, ignore a complexidade e tente resolvê-la com as ferramentas que você tem à sua disposição, você também pode procurar informações extras no google ou documentações que você conhece!!

## Propriedade Única
Você deve criar uma função chamada propriedadeUnica que recebe uma array de objetos como parâmetro e uma string. Você deve devolver um novo array de objetos, tendo apenas a propriedade que foi passada como string. exemplo:

```
let array = [ { nome: &quot;Lean&quot;, idade: 27 }, { nome: &quot;Eze&quot;, idade: 49} ]
propriedadeUnica(array, &quot;idade&quot;) deve retornar [ { idade: 27 }, { idade: 49 } ]
propriedadeUnica(array, &quot;nome&quot;) deve retornar [ { nome: &quot;Lean&quot;}, { nome: &quot;Eze&quot; } ]
```

## Calculadora de notas
Crie o objeto do aluno,que consistirá nas seguintes propriedades básicas:
* número
* Número do arquivo
* Lista de notas
Gostaríamos de calcular a média do aluno e se ela é aprovada com base em uma nota de aprovação que será dada. Para este exercício vamos deixar você pensar sobre todos os métodos e propriedades que podem ser necessários para que nosso programa funcione corretamente da maneira solicitada.