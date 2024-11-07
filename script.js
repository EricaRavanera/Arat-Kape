function acceptProposal() {
    alert("Diba di ka nag kakape? bat nag agree ka? HAHAHAHA eme mo Rodel");
    alert("Seryoso ka bang pinindot yung (Sige Tara) ? Kala mo siguro libre kape, pero surprise! Warm water lang pala!");
    alert("HAHAHAHAHA joke lang teh kalma, STAY HEALTHY!");
    document.getElementById("overlay").style.display = "block";
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
}

function moveNoButton() {
    var button = document.getElementById("noBtn");
    var newX = Math.random() * (window.innerWidth - button.offsetWidth);
    var newY = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = "absolute";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
}
