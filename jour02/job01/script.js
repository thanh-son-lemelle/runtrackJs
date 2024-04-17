document.addEventListener("DOMContentLoaded", function() {

    function citation() {
        var text = document.getElementById("citation").textContent;
        console.log(text);
    }
    const button = document.getElementById("button");

    button.addEventListener("click", citation);
});