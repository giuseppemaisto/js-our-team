//1 - Definisco array team
//2 - inserisco oggetti persone in array
//2.1 - definisco in oggetti nome, ruolo e foto 


//MILESTONE 0
const Team =[
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder &  CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'Angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Develoer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
]

//MILESTONE 1
//3 - stampo su console per ogni oggetto, tutte le informazioni
  //  3.1 - utilizzo ciclo for
  let stampaTeam
  for(let i = 0; i<Team.length;i++){
    stampaTeam = Team[i];
    //console.log(stampaTeam);
    console.log(stampaTeam.nome , stampaTeam.ruolo, stampaTeam.foto);
  }