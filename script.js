
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

