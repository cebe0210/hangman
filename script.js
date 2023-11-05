fetch("mots.json")
.then(Response => Response.json())
.then(data => {
    mots = data.mots;
    const motRandom = motAleatoire();
    console.log(motRandom)
    afficheMot(motRandom)
})

function motAleatoire() {
    const motRandom = Math.floor(Math.random() * mots.length);
    return mots[motRandom];

};

function afficheMot(mot){
 let footer = document.querySelector('footer');
 let paragraphe = document.createElement('p')
paragraphe.textContent = mot;
paragraphe.setAttribute('id', 'mot')
let parentElement = footer.parentElement;
parentElement.insertBefore(paragraphe, footer);
};