function showhide() {
    var article = document.getElementById("article");
    if (article.style.display === "none") {
        article.style.display = "block";
    } else {
        article.style.display = "none";
    }
}

document.getElementById("button").addEventListener("click", showhide);

document.addEventListener("DOMContentLoaded", function() {
    var article = document.getElementById("article");
    article.style.display = "none";
});