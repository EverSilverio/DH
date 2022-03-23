const jsonData = `
{
   "squadName": "Super hero squad",
   "homeTown": "Metro City",
   "formed": 2016,
   "secretBase": "Super tower",
   "active": true,
   "members": [
      {
         "name": "Molecule Man",
         "age": 29,
         "secretIdentity": "Dan Jukes",
         "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
      },
      {
         "name": "Madame Uppercut",
         "age": 39,
         "secretIdentity": "Jane Wilson",
         "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
         ]
      },
      {
         "name": "Eternal Flame",
         "age": 1000000,
         "secretIdentity": "Unknown",
         "powers": [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"
         ]
      },
      {
         "name": "NicoMendesS",
         "age": 18,
         "secretIdentity": "Nicolas Silverio",
         "powers": [
            "Teletransporte",
            "Invisibilidade",
            "Gamer foda",
            "Telecinese"
         ]
      }      
   ]
}
`;

//Percorra o JSON e insera os nomes dos membros na lista html
function percorrerMembros() {
   //escreva a lógica

   // obtem o json e transforma em objeto json
   let objJson = JSON.parse(jsonData);

   // obtem lista de membros do objeto
   let members = objJson.members;

   // obtem elemento <ul> com id="membros"
   let ulMembers = document.getElementById('membros')

   // itera lista de membros
   members.forEach(el => {
      // cria nó <li> para receber cards
      let card = document.createElement('li');

      // obtem poderes do membro
      let powers = el.powers.join(', ');

      // adiciona template do card ao nó <li> criado
      card.innerHTML = `
      <div class="cards">
         <h3>${el.name}</h3>
         <p>Age: <strong>${el.age}</strong></p>
         <p>Identidade Secreta:</p>
         <p><strong>${el.secretIdentity}</strong></p>
         <p>Poderes</p>
         <p><strong>${powers}</strong></p>
      </div>
      `;

      // faz append do nó <li> à <ul>      
      ulMembers.appendChild(card);
   });
}

// call da funcao percorrerMembros
percorrerMembros();