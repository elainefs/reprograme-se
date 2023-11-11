let btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click", calcularIMC);

function calcularIMC() {
  let altura = parseFloat(document.querySelector("#txtAltura").value);
  let peso = parseFloat(document.querySelector("#txtPeso").value);

  let imc = peso / (altura * altura);

  let exibirIMC = document.querySelector("#divIMC");
  exibirIMC.innerHTML = `O IMC é: <b>${imc.toFixed(2)}</b>`;
}
