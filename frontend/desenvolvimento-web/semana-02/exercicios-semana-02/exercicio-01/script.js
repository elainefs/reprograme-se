let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", mensagem1);
btn1.addEventListener("click", mensagem2);
btn1.addEventListener("click", mensagem3);

function mensagem1(e) {
  alert("Mensagem 1: " + e.target.id); // Mensagem 1: btn1
}

function mensagem2() {
  alert("Mensagem 2: " + btn1.innerText); // Mensagem 2: Botão 1
}

function mensagem3() {
  alert("Mensagem 3: " + btn1.type); // Mensagem 3: button
}
