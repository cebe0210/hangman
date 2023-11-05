//Recuperation des mots dans le fichier JSON :

fetch("mots.json")
.then(Response => Response.json())
.then(data => {
    mots = data.mots;
    const motRandom = motAleatoire();
    console.log(motRandom)
    afficheMot(motRandom)
})
// Selectionner un mots aléatoire :

function motAleatoire() {
    const motRandom = Math.floor(Math.random() * mots.length);
    return mots[motRandom];
};

// Création <p> DOM + affichage du mot aléatoire :
function afficheMot(mot){
 let footer = document.querySelector('footer');
 let paragraphe = document.createElement('p')
paragraphe.textContent = mot;
paragraphe.setAttribute('id', 'mot')
let parentElement = footer.parentElement;
parentElement.insertBefore(paragraphe, footer);
};

// Création <p> DOM + Affichage vie restante :

function vie(){
    let h1 = document.querySelector('h1');
    let paragraphe = document.createElement('p');
    paragraphe.textContent = life;
    paragraphe.setAttribute('id', 'vies')
    h1.appendChild(paragraphe);
}
vie();
// Affichage nombre de vies restantes :

let life = 5;