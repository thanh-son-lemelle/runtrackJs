$(document).ready(function() {
    // Fonction pour mélanger les images
    function melangerImages() {
        var parent = $("#rainbow");
        var images = parent.children();
        while (images.length) {
            parent.append(images.splice(Math.floor(Math.random() * images.length), 1)[0]);
        }
    }

    // Fonction pour vérifier l'ordre des images
    function verifierOrdre() {
        var images = $(".rainbow-image");
        var ordreCorrect = true;
        images.each(function(index) {
            if (parseInt($(this).attr("alt").split(" ")[1]) !== index + 1) {
                ordreCorrect = false;
                return false; // Sortir de la boucle each
            }
        });
        var message = $("#message");
        message.text(ordreCorrect ? "Vous avez gagné" : "Vous avez perdu").css("color", ordreCorrect ? "green" : "red");
    }

    // Événement de clic sur le bouton de mélange
    $("#shuffleButton").click(function() {
        melangerImages();
        verifierOrdre();
    });

    // Activer le glisser-déposer avec jQuery UI
    $("#rainbow").sortable({
        update: function(event, ui) {
            verifierOrdre();
        }
    });
    $("#rainbow").disableSelection();
});