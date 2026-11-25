
console.log("Script chargé !");


const boutonTheme = document.querySelector("#bouton-theme");
boutonTheme.addEventListener("click", function() { document.body.classList.toggle("dark-theme"); });

const curseur = document.querySelector("#font-size-slider");
const valeurTaille = document.querySelector("#font-size-value");

curseur.addEventListener("input", function () {

    document.body.style.fontSize = curseur.value + "%";

    valeurTaille.textContent = curseur.value + "%";

});

