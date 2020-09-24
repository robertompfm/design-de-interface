function verificar() {
  let v1 = document.getElementById("div-num-1").value;
  let v2 = document.getElementById("div-num-2").value;
  let resultado = document.getElementById("div-resultado");
  if (v1 % v2 == 0) {
    resultado.value = "A eh divisivel por B";
  } else {
    resultado.value = "A nao eh divisivel por B";
  }
}


function calcular() {
  let v1 = Number(document.getElementById("calc-num-1").value);
  let v2 = Number(document.getElementById("calc-num-2").value);
  let op = document.getElementById("op").value;
  let resultado = document.getElementById("calc-resultado");
  switch (op) {
    case 'somar':
      resultado.value = v1 + v2;
      break;
    case 'subtrair':
      resultado.value = v1 - v2;
      break;
    case 'multiplicar':
      resultado.value = v1 * v2;
      break;
    case 'dividir':
      resultado.value = v1 / v2;
      break;     
  }
}