let btnAdicionar = document.querySelector("#btnAdicionar");
btnAdicionar.addEventListener("click", addNumber);

function addNumber() {
  let numero = parseInt(Math.random() * 100 + 1);

  let table = document.querySelector("#table1");

  let linha = document.createElement("tr");
  linha.innerHTML = `<td>${numero}</td>`;

  table.appendChild(linha);
}
