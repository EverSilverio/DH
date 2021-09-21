/*
Exercício Integrador
Temos que fazer um sistema para um Agricultor controlar suas vendas. Ele tem um controle de vendas em um caderno, onde os produtos estão organizados por nome, preço e quantidade vendida. 
Portanto, crie um array de objetos literais com essas informações. No sistema, você tem que adicionar uma função (ou várias) que realize os seguintes passos:
1. Calcular o lucro total de todos os produtos;
2. Permitir pesquisar um produto pelo nome e calcular seu lucro total;
3. Permite receber um valor e indicar todos os produtos que venderam mais que esse valor;
4. Classifique todos os produtos pela quantidade de dinheiro que geraram.
5. Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome).
6. Calcule o lucro total após pagar 45% do lucro em impostos.
*/

//define lista de objeto literais com produtos
let listaProdutos = [
    {nome: 'Cana-de-açúcar', custo: 68, preco: 98, qtd: 120 },
    {nome: 'Milho', custo: 76, preco: 95, qtd: 180 },
    {nome: 'Café', custo: 920, preco: 1065, qtd: 80 },
    {nome: 'Algodão', custo: 165, preco: 185, qtd: 810 },
    {nome: 'Tabaco', custo: 148, preco: 175, qtd: 250 },
    {nome: 'Arroz', custo: 132, preco: 165, qtd: 350 },
    {nome: 'Soja', custo: 151, preco: 170, qtd: 452 }
];

//define objeto literal produtos, com a lista de produtos e métodos disponiveis
let produtos = {
    lista: listaProdutos,
    listaTotalVenda: function () { //cria uma nova lista com valor total de venda, total custo e total lucro
        return this.lista.map(function (e) {
            return {
                ...e, 
                totalVenda: e.preco * e.qtd, 
                totalCusto: e.custo * e.qtd, 
                lucro: (e.preco * e.qtd) - (e.custo * e.qtd)
            }
        })        
    },
    formatoMoeda: function (valor) { //funcao que formata o nro para ser exibido
        //formata o valor para ser exibido
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });        
    },
    calculaLucroTotal: function () { //1
        let lucro = 0;

        this.lista.forEach(function (produto) { //varre a lista para calcular lucro
            lucro += (produto.preco - produto.custo) * produto.qtd;
        })
        
        console.log(`Lucro total no período: ${this.formatoMoeda(lucro)}`);
    },
    calculaLucroProduto: function (nome) { //2
        let produto = this.lista.filter(function (el) {  // varre a lista para encontrar produto passado para funcao
            return el.nome == nome;
        });

        let lucroProduto = (produto[0].preco - produto[0].custo) * produto[0].qtd;

        console.log(`Lucro do produto ${nome} no período: ${this.formatoMoeda(lucroProduto)}`);
    },
    produtosVendaMais: function (valor) { //3
        let formata = this.formatoMoeda;
        
        //busca lista com o total das vendas
        let listaTotalVenda = this.listaTotalVenda();

        //filtra produtos com vendas maiores que o valor passado por parametro
        let listaMaisVendidos = listaTotalVenda.filter(function (el) {
            return el.totalVenda > valor;
        })

        //imprime produtos que venderam mais que o valor passado por parametro
        console.log(`---- PRODUTOS COM VENDAS MAIORES QUE ${formata(valor)} ----`);
        listaMaisVendidos.forEach(function (el) {
            console.log(`${el.nome} vendeu ${formata(el.totalVenda)}`);
        })
    },
    classificaPorVenda: function (ordem) { //4 - deve ser 'asc' ou 'des'
        let formata = this.formatoMoeda;

        //busca lista com o total das vendas e classifica cfme parametro
        let listaTotalVenda = this.listaTotalVenda().sort(function (a, b) {
            if (ordem === 'asc') 
            return a.totalVenda - b.totalVenda
            else
            return b.totalVenda - a.totalVenda
        })

        console.log(`--- PRODUTOS QUE MAIS VENDERAM POR ORDEM ${ordem}`);
        listaTotalVenda.forEach( p => 
            console.log(`${p.nome} vendeu ${formata(p.totalVenda)}`)
        )
    },
    alteraValorVenda: function (nome, novoPreco) { //4
        let precoAntigo;
        this.lista.forEach(function (el) {
            if (el.nome === nome) {
                precoAntigo = el.preco;
                el.preco = novoPreco;
            }
        })

        console.log('---- ALTERACAO DE PRECO ----');
        console.log(`Novo preço do produto ${nome}, de ${this.formatoMoeda(precoAntigo)} para ${this.formatoMoeda(novoPreco)}`);
    },
    calculaLucroMenosImpostos: function () { //5
        // busca lista com lucro calculado
        let lista = this.listaTotalVenda();

        let valorLucroMenosImp = lista.reduce(function (acc, p) {
            acc += p.lucro - (p.lucro * .45);
            return acc;
        }, 0)

        console.log('---- LUCRO ATUAL MENOS IMPOSTOS ----');
        console.log(`O lucro atual menos impostos de 45% é ${this.formatoMoeda(valorLucroMenosImp)}`);
    }
}

produtos.alteraValorVenda('Tabaco',195) //altera valor do produto para o valor informado
produtos.calculaLucroTotal(); // invoca funcao para calcular lucro total do período
produtos.calculaLucroProduto('Tabaco'); // invoca funcao para calcular lucro de um produto
produtos.produtosVendaMais(50000); // invoca funcao que ira lista produtos que venderam mais que x
produtos.classificaPorVenda('dec'); //retorna lista formatada classificado por venda, passar ordem como parametro (asc ou des)
produtos.calculaLucroMenosImpostos(); //calcula lucro geral menos impostos
