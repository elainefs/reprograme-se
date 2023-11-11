var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
let select_animais = document.getElementById('select_animais');
// Selecionar elemento 'container' ( 1 ponto)
let container = document.getElementById('container');
// Selecionar elemento 'nome' ( 1 ponto)
let nome = document.getElementById('nome');

// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
select_animais.addEventListener('input', listarAnimais);
// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
container.addEventListener('mouseover', mostrarNome);
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
container.addEventListener('mouseout', limparNome);

function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();
  // Implementar...
  if (select_animais.value == 'dog') {
    for (let i = 0; i < cachorros.length; i++) {
      let cachorro = cachorros[i];
      let novoCachorro = document.createElement('img');
      novoCachorro.src = 'img/' + cachorro.imagem + '.jpg';
      container.appendChild(novoCachorro);
      novoCachorro.title = cachorro.nome;
      novoCachorro.addEventListener('mouseover', mostrarNome);
    }
  } else {
    for (let i = 0; i < gatos.length; i++) {
      let gato = gatos[i];
      let novoGato = document.createElement('img');
      novoGato.src = 'img/' + gato.imagem + '.jpg';
      container.appendChild(novoGato);
      novoGato.title = gato.nome;
      novoGato.addEventListener('mouseover', mostrarNome);
    }
  }
}

function mostrarNome(e) { // Implementação da função (4 pontos)
  // Implementar...
  nome.innerText = e.target.title;
}

function limparNome() {
  nome.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}