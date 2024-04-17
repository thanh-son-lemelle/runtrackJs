// Code Konami
var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

var konamiIndex = 0;

// Écouteur d'événement pour les touches pressées
document.addEventListener('keydown', function(event) {
  // Vérification si la touche pressée correspond à la prochaine dans le code Konami
  if (event.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    // Vérification si le code Konami a été entièrement entré
    if (konamiIndex === konamiCode.length) {
      // Appliquer le style La Plateforme_
      document.body.classList.add('la-plateforme-style');
      konamiIndex = 0; // Réinitialiser l'index pour la prochaine saisie
    }
  } else {
    konamiIndex = 0; // Réinitialiser l'index si la touche pressée ne correspond pas à la prochaine dans le code Konami
  }
});