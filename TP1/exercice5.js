const livre = {
    titre : "titre",
    auteur : "auteur",
    annee : "annee"
}

function getInfo(livre){
    let desc = "t : " + livre.titre + " a : " + livre.auteur + " ann : " + livre.annee;
    return desc
}

console.log(getInfo(livre))