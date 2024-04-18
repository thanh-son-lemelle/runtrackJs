
function jsonValueKey(obj, key) {
    return obj[key];
}

document.getElementById("button").addEventListener("click", function() {
    fetch("localData.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("adresse").textContent = jsonValueKey(data, "city");
        })
        .catch(error => console.error(error));
});