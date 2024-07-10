// DEFINISCO UN'ARRAY DI OGGETTI
const team = [
    // AGGIUNGO LE INFORMAZIONI A GLI OGGETTI
    {
        name:'Wayne Barnett',
        role:'Founder & CEO',
        img:'wayne-barnett-founder-ceo.jpg',
    },
    {
        name:'Angela Caroll',
        role:'Chief Editor',
        img:'angela-caroll-chief-editor.jpg',
    },
    {
        name:'Walter Gordon',
        role:'Office Manager',
        img:'walter-gordon-office-manager.jpg',
    },
    {
        name:'Angela Lopez',
        role:'Social Media Manager',
        img:'angela-lopez-social-media-manager.jpg',
    },
    {
        name:'Scott Estrada',
        role:'Developer',
        img:'scott-estrada-developer.jpg',
    },
    {
        name:'Barbara Ramos',
        role:'Graphic Designer',
        img:'barbara-ramos-graphic-designer.jpg',
    },
]
// CICLO L'ARRAY CON UN FOR PER TRGHETIZZARE I SINGOLI OGGETTI
for (let i = 0; i < team.length; i++){
    // STAMPO IL VALORE NAME DEGLI OGGETTI DENTRO L'ARRAY 
    console.log(team[i].name);
    // STAMPO IL VALORE ROLE DEGLI OGGETTI DENTRO L'ARRAY
    console.log(team[i].role)
}