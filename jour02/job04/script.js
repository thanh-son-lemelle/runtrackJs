var keylogger = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    var key = String.fromCharCode(event.which).toLocaleLowerCase();
    if (document.activeElement === keylogger) {
        keylogger.value += key;
    } else {
        keylogger.value += key;
    }
    });