// Récupération de l'élément bouton et de l'élément compteur
var button = document.getElementById("button");
var compteur = document.getElementById("compteur");

// Initialisation du compteur de clics
var nombreDeClics = 0;

function addOne() {
    nombreDeClics++;
    compteur.textContent = nombreDeClics;
}

// Ajout d'un écouteur d'événement sur le bouton
button.addEventListener("click", addOne, {

});