var elementos = document.getElementsByTagName('*');
document.write("Quantidade de elementos: " + elementos.length);

var todosElementos = "";

for (let i = 0; i < elementos.length; i = i + 1) {
  todosElementos = todosElementos + "<br>" + elementos[i].tagName;
}

/*
for (e of elementos) {
  todosElementos = todosElementos + "<br>" + e.tagName;
}
*/

document.write(todosElementos);
window.document.title = "Novo título";

// getElementById
var h1_brasil = window.document.getElementById('pais_brasil');
h1_brasil.style.background = "Yellow";
window.document.write("<p> innerText: " + h1_brasil.innerText);
window.document.write("<p> innerHTML: " + h1_brasil.innerHTML);
//window.alert(h1_brasil.innerHTML);

// getElementsByTagName
var array_h2 = window.document.getElementsByTagName('h2');
var h2_es = array_h2[0];
var h2_mg = array_h2[1];
h2_es.style.color = 'Pink';
h2_mg.style.color = 'DarkRed';

// getElementsByName
var array_cidade = window.document.getElementsByName('cidade');
var cidade_0 = array_cidade[0];
cidade_0.style.borderLeftColor = "Yellow";

// getElementsByClassName
var array_cidade_mg = window.document.getElementsByClassName('cidade-mg');
var cidade_mg_1 = array_cidade_mg[1];
cidade_mg_1.style.borderLeftColor = "Yellow";

// querySelector
var pais = window.document.querySelector('#pais_brasil');
pais.style.border = "2px solid Green";
pais.style.textAlign = "center";

var cidade_es_0 = window.document.querySelector('.cidade-es');
cidade_es_0.style.color = "Blue";

console.log(document.querySelectorAll("p:nth-child(odd)")); // odd | even

