/* Bootstrap validate form */
(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          form.classList.add("was-validated");
        } else {
          insertContact();
          form.classList.remove("was-validate");
          form.reset();
        }
        event.preventDefault();
        event.stopPropagation();
      },
      false
    );
  });
})();

/* End Bootstrap validate form */

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("bd_contact")) ?? [];
}

function setLocalStorage(bd_contact) {
  localStorage.setItem("bd_contact", JSON.stringify(bd_contact));
}

function updateTable() {
  cleanTable();
  const bd_contact = getLocalStorage();
  bd_contact.forEach(insertRowTable);
}

function insertRowTable(contact, index) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <th scope="row">${index}</th>
    <td>${contact.nome}</td>
    <td>${contact.telefone}</td>
    <td>
      <button type="button" class="btn btn-danger" id="${index}" onclick="deleteContact(${index})">Excluir</button>
    </td>
  `;

  document.querySelector("#tabelaContato>tbody").appendChild(newRow);
}

function insertContact() {
  const contact = {
    nome: document.getElementById("txtNome").value,
    telefone: document.getElementById("txtTelefone").value,
  };

  const bd_contact = getLocalStorage();
  bd_contact.push(contact);
  setLocalStorage(bd_contact);
  updateTable();
}

function cleanTable(){
  let element = document.querySelector("#tabelaContato>tbody");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function deleteContact(index){
  const bd_contact = getLocalStorage();
  bd_contact.splice(index, 1);
  setLocalStorage(bd_contact);
  updateTable();
}

updateTable();