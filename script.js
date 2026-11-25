
console.log("Script chargé !");


const boutonTheme = document.querySelector("#bouton-theme");
boutonTheme.addEventListener("click", function() { document.body.classList.toggle("dark-theme"); });

const curseur = document.querySelector("#font-size-slider");
const valeurTaille = document.querySelector("#font-size-value");

curseur.addEventListener("input", function () {

    document.body.style.fontSize = curseur.value + "%";

    valeurTaille.textContent = curseur.value + "%";

});

const heure = new Date().getHours();
const salutation = document.querySelector("#salutation");

if (heure < 12) {
    salutation.textContent = "Bonjour, bonne lecture !";
}
else if (heure < 18) {
    salutation.textContent = "Bon après-midi, bonne lecture !";
}
else {
    salutation.textContent = "Bonsoir, bonne lecture !";
}

const POIDS_PAGE_MO = 2;

const pages = document.querySelector("#pages-par-jour");
const resultat = document.querySelector("#resultat");

document.querySelector("#bouton-calculer").addEventListener("click", function () {

    const nombre = Number(pages.value);

    const poids = Math.round(nombre * POIDS_PAGE_MO * 365 / 1000);

    let message = "Environ " + poids + " Go par an. ";

    if (poids < 20) {
        message += "Votre consommation est faible.";
    }
    else if (poids < 100) {
        message += "Votre consommation est modérée.";
    }
    else {
        message += "Votre consommation est importante.";
    }

    resultat.textContent = message;

});