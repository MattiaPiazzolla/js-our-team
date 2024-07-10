// DEFINISCO UNA FUNZIONE PER CREARE LE COLONNE CHE ANDRANNO AD OSPITARE LE CARD
function createCol(){
    // DETERMINO QUALE ELEMENTO DEVE ESSERE CREATO 
    const col = document.createElement('div');
    // AGGIUNGO LE CLASSI ALLE MIE COLONNE
    col.classList.add('col-12', 'col-md-6', 'col-lg-4');
    // RESTITUISOC LA COLONNA
    return col;
}

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

// RECUPERO LA DESTINAZIONE DELLE INFORMAZIONI DAL DOM
let cardDestination = document.getElementById('cardContainer');

// CICLO L'ARRAY CON UN FOR PER TRGHETIZZARE I SINGOLI OGGETTI
for (let i = 0; i < team.length; i++){
    // STAMPO IL VALORE NAME DEGLI OGGETTI DENTRO L'ARRAY 
    console.log(team[i].name);
    // STAMPO IL VALORE ROLE DEGLI OGGETTI DENTRO L'ARRAY
    console.log(team[i].role)
    // STAMPO IL VALORE IMG DEGLI OGGETTI DENTRO L'ARRAY
    console.log(team[i].img)

    // CREO LA COLONNA NEL DOM CHIAMANDO LA FUNZIONE APPENA CREATA
    const col = createCol();
    // INSERISCO IL CONTENUTO ALLE COLONNE
    col.innerHTML = `<div class="custom-card row g-0">
                        <img src="./img/${team[i].img}" alt="">
                        <p class="text-center mt-3 mb-0 fs-4 text-secondary">${team[i].name}</p>
                        <p class="text-center mt-0 mb-3 fw-light text-secondary p-custom-header">${team[i].role}</p>
                    </div>`
    // INSERISCO LE COLONNE CREATE NEL DOM
    cardDestination.append(col);
}
