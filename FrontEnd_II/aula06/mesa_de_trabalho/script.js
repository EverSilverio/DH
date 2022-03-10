const btnSwitch = document.querySelector('#mode');
const container = document.querySelector('.container');

const modeSwitch = function () {
    document.body.classList.toggle('dark')
}

// adicionar evento change e metodo modeSwitch
btnSwitch.addEventListener('change', modeSwitch);

const felinos = [
    {
        imgUrl: './imagens/tiger.jpg',
        title: 'O tigre',
        texto: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
    },
    {
        imgUrl: './imagens/leon.jpg',
        title: 'O leão',
        texto: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.'
    },
    {
        imgUrl: './imagens/leopardo.jpg',
        title: 'O leopardo',
        texto: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).'
    },
    {
        imgUrl: './imagens/pantera-negra.jpg',
        title: 'A pantera negra',
        texto: 'A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma espécie, é simplesmente uma variação negra destes animais.'
    },
    {
        imgUrl: './imagens/jaguar.jpg',
        title: 'O jaguar',
        texto: 'O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do  gênero Panthera.É a única das cinco espécies existentes deste gênero encontradas nas Américas.Também  é o maior felino das Américas e o terceiro maior do mundo, depois do tigre(Panthera tigris) e do leão(Panthera leo).'
},

    {
        imgUrl: './imagens/chita.jpg',
        title: 'O guepardo',
        texto: 'O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.'
    }
];

const loadTemplate = function (imgUrl, title, texto) {
    let template = `
        <img src="${imgUrl}">
        <h2>${title}</h2>
        <p>
            ${texto}
        </p>
    `
    return template;
}

window.onload = function (e) {
    for (const f of felinos) {
        let nodeDiv = document.createElement('div');
        nodeDiv.classList.add('item');
        nodeDiv.innerHTML = loadTemplate(f.imgUrl, f.title, f.texto);
        container.appendChild(nodeDiv);
    }
};