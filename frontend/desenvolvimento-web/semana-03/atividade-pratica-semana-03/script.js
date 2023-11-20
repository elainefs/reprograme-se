(function() {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated')
        } else {
          inserir()
          form.classList.remove('was-validated')
          form.reset()
        }
        event.preventDefault()
        event.stopPropagation()
      }, false)
    })
})()


function getLocalStorage() {
  return JSON.parse(localStorage.getItem('bd_monitores')) ?? [];
}

function setLocalStorage(bd_monitores) {
  localStorage.setItem('bd_monitores', JSON.stringify(bd_monitores));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() { // Adaptação da função atualizarTabela (5 pontos)
  limparTabela();
  const bd_monitores = getLocalStorage();
  let index = 0;
  for (monitor of bd_monitores) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${monitor.numeroSerie}</td>
        <td>${monitor.marca}</td>
        <td>${monitor.tamanhoTela}</td>
        <td>${monitor.tipoTela}</td>
        <td>${monitor.tipoConexao}</td>
        <td>${monitor.preco}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `
    document.querySelector('#tabela>tbody').appendChild(novaLinha)
    index++;
  }
}

function inserir() { // Adaptação da função inserir (10 pontos)
  const monitor = {
    numeroSerie: document.getElementById('numeroSerie').value,
    marca: document.getElementById('marca').value,
    tamanhoTela: document.getElementById('tamanhoTela').value,
    tipoTela: document.getElementById('tipoTela').value,
    tipoConexao: document.getElementById('tipoConexao').value,
    preco: document.getElementById('preco').value
  }
  const bd_monitores = getLocalStorage();
  bd_monitores.push(monitor);
  setLocalStorage(bd_monitores);
  atualizarTabela();
}

function excluir(index) { // Adaptação da função excluir (5 pontos)
  const bd_monitores = getLocalStorage();
  bd_monitores.splice(index, 1);
  setLocalStorage(bd_monitores);
  atualizarTabela();
}

function validarNumeroSerie() { // Adaptação da função validar (10 pontos)
  const bd_monitores = getLocalStorage();
  for (monitor of bd_monitores) {
    if (numeroSerie.value == monitor.numeroSerie) {
      numeroSerie.setCustomValidity("O número de série deve conter 10 números.");
      feedbackSerie.innerText = "Este número de série já existe!";
      return false;
    } else {
      numeroSerie.setCustomValidity("");
      feedbackSerie.innerText = "O número de série deve conter 10 números";
    }
  }
  return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const numeroSerie = document.getElementById("numeroSerie");
const feedbackSerie = document.getElementById("feedbackSerie");
numeroSerie.addEventListener('input', validarNumeroSerie);