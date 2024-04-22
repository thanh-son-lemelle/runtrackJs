document.addEventListener("DOMContentLoaded", function(){
    var nom_entry = document.getElementById("nom");
    var nom_error = document.getElementById("nomError");

    var prenom_entry = document.getElementById("prenom");
    var prenom_error = document.getElementById("prenomError");

    var email_entry = document.getElementById("email");
    var email_error = document.getElementById("emailError");

    var password_entry = document.getElementById("password");
    var password_error = document.getElementById("passwordError");

    var password_confirm_entry = document.getElementById("confirmPassword");
    var password_confirm_error = document.getElementById("confirmPasswordError");

    var address_entry = document.getElementById("adresse");
    var address_error = document.getElementById("adresseError");

    var postal_entry = document.getElementById("codePostal");
    var postal_error = document.getElementById("codePostalError");

    nom_entry.addEventListener("input", function(){
        const nom = nom_entry.value;
        VerifNom(nom);
    });

    prenom_entry.addEventListener("input", function(){
        const prenom = prenom_entry.value;
        VerifPrenom(prenom);
    });

    email_entry.addEventListener("input", function(){
        const email = email_entry.value;
        VerifEmail(email);
    });

    password_entry.addEventListener("input", function(){
        const password = password_entry.value;
        VerifPassword(password);
    });

    password_confirm_entry.addEventListener("input", function(){
        const password_confirm = password_confirm_entry.value;
        VerifPasswordConfirm(password_confirm);
    });

    address_entry.addEventListener("input", function(){
        const address = address_entry.value;
        VerifAddress(address);
    });

    postal_entry.addEventListener("input", function(){
        const postal = postal_entry.value;
        VerifPostal(postal);
    });



    function VerifNom(nom){
        if(nom === ""){
            nom_error.innerHTML = "Veuillez renseigner ce champ";
            nom_error.style.color = "red";
        }
        else if (nom.length < 2){
            nom_error.innerHTML = "Veuillez renseigner un nom valide";
            nom_error.style.color = "red";
        }
        else {
            nom_error.innerHTML = "";
        }
    }

    function VerifPrenom(prenom){
        if(prenom === ""){
            prenom_error.innerHTML = "Veuillez renseigner ce champ";
            prenom_error.style.color = "red";
        }
        else if (prenom.length < 2){
            prenom_error.innerHTML = "Veuillez renseigner un prénom valide";
            prenom_error.style.color = "red";
        }
        else {
            prenom_error.innerHTML = "";
        }
    }

    function VerifEmail(email){
        if(email === ""){
            email_error.innerHTML = "Veuillez renseigner ce champ";
            email_error.style.color = "red";
        }
        else if (!email.includes("@")){
            email_error.innerHTML = "Veuillez renseigner un email valide";
            email_error.style.color = "red";
        }
        else {
            email_error.innerHTML = "";
        }
    }

    function VerifPassword(password){
        if(password === ""){
            password_error.innerHTML = "Veuillez renseigner ce champ";
            password_error.style.color = "red";
        }
        else if (password.length < 8){
            password_error.innerHTML = "Votre mot de passe doit contenir au moins 8 caractères";
            password_error.style.color = "red";
        }
        else {
            password_error.innerHTML = "";
        }
    }

    function VerifPasswordConfirm(password_confirm){
        if(password_confirm === ""){
            password_confirm_error.innerHTML = "Veuillez renseigner ce champ";
            password_confirm_error.style.color = "red";
        }
        else if (password_confirm !== password_entry.value){
            password_confirm_error.innerHTML = "Les mots de passe ne correspondent pas";
            password_confirm_error.style.color = "red";
        }
        else {
            password_confirm_error.innerHTML = "";
        }
    }

    function VerifAddress(address){
        if(address === ""){
            address_error.innerHTML = "Veuillez renseigner ce champ";
            address_error.style.color = "red";
        }
        else if (address.length < 10){
            address_error.innerHTML = "Veuillez renseigner une adresse valide";
            address_error.style.color = "red";
        }
        else {
            address_error.innerHTML = "";
        }
    }

    function VerifPostal(postal){
        if(postal === ""){
            postal_error.innerHTML = "Veuillez renseigner ce champ";
            postal_error.style.color = "red";
        }
        else if (postal.length < 5 || postal.length > 5){
            postal_error.innerHTML = "Veuillez renseigner un code postal valide";
            postal_error.style.color = "red";
        }
        else if (!/^\d+$/.test(postal)){
            postal_error.innerHTML = "Veuillez renseigner un code postal valide";
            postal_error.style.color = "red";
        }
        else {
            postal_error.innerHTML = "";
        }
    }
});