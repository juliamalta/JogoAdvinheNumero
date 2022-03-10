var NumeroSecreto = parseInt(Math.random() * 11);
function Chutar() {
  var resultadoFinal = document.getElementById("resultado");

  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == NumeroSecreto) {
    resultadoFinal.innerHTML = "voce acertou";
  } else if (chute > 10 || chute < 0) {
    resultadoFinal.innerHTML = "digitar numero entre 0 e 10";
  } else if (chute < NumeroSecreto) {
    resultadoFinal.innerHTML =
      "voce errou , seu numero e menor do que o sorteado,digite um numero MAIOR " +
      NumeroSecreto;
  } else if (chute > NumeroSecreto) {
    resultadoFinal.innerHTML =
      "voce errou , seu numero e maior do que o sorteado,digite um numero MENOR " +
      NumeroSecreto;
  }
}