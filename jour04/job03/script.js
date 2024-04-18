document.getElementById("filterButton").addEventListener("click", function() {
    var id = document.getElementById("idInput").value;
    var name = document.getElementById("nameInput").value;
    var type = document.getElementById("typeInput").value;

    fetch("pokemon.json")
        .then(response => response.json())
        .then(data => {
            var filteredData = data.filter(item => 
                (!id || item.id.toString() === id) &&
                (!name || Object.values(item.name).includes(name)) &&
                (!type || item.type.includes(type))
            );
            document.getElementById("result").innerHTML = JSON.stringify(filteredData, null, 2);
        })
        .catch(error => console.error('Erreur:', error));
});