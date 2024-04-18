document.getElementById("updateButton").addEventListener("click", function() {
    fetch("utilisateur.json")
        .then(response => response.json())
        .then(data => {
            var table = document.getElementById("userTable");
            table.innerHTML = `
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                </tr>
            `;
            data.forEach(user => {
                var row = table.insertRow(-1);
                row.insertCell(0).innerHTML = user.id;
                row.insertCell(1).innerHTML = user.nom;
                row.insertCell(2).innerHTML = user.prenom;
                row.insertCell(3).innerHTML = user.email;
            });
        })
        .catch(error => console.error('Erreur:', error));
});
