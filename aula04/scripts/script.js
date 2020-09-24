document.getElementById("ligar").innerHTML = "ligar";
document.getElementById("desligar").innerHTML = "desligar";


function ligar() {
  document.getElementById('lampada').src = 'images/pic_bulbon.gif'
}

function desligar() {
  document.getElementById('lampada').src = 'images/pic_bulboff.gif'
}