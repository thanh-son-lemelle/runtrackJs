document.addEventListener("scroll", function() {
    var hauteurTotale = document.documentElement.scrollHeight - window.innerHeight;
  
    var positionScroll = window.scrollY;
  
    var pourcentageScroll = (positionScroll / hauteurTotale) * 100;
  
    const footer = document.querySelector("footer");
    footer.style.backgroundColor = "hsl(" + pourcentageScroll + ", 50%, 50%)";
  });