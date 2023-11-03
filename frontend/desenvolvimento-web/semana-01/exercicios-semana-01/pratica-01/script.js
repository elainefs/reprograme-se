var corpo = document.body;
corpo.style.background = "gray";
document.title = "Novo título";

//getElementById
var h1_brasil = document.getElementById("pais_brasil");
h1_brasil.style.background = "yellow";
document.write("<p> innerText: " + h1_brasil.innerText);
document.write("<p> innerHTML: " + h1_brasil.innerHTML);

//getElementByTagName
var array_h2 = document.getElementsByTagName("h2");
var h2_es = array_h2[0];
var h2_mg = array_h2[1];
h2_es.style.color = "pink";
h2_mg.style.color = "darkred";

//getElementsByName
var array_cidade = document.getElementsByName("cidade");
var cidade_0 = array_cidade[0];
cidade_0.style.borderLeftColor = "yellow";

//getElementsByClassName
var array_cidade_mg = document.getElementsByClassName("cidade-mg");
var cidade_mg_1 = array_cidade_mg[1];
cidade_mg_1.style.borderLeftColor = "yellow";

//querySelector
var pais = document.querySelector("#pais_brasil");
pais.style.border = "3px solid green";
pais.style.textAlign = "center";

var cidade_es_0 = document.querySelector(".cidade-es");
cidade_es_0.style.color = "blue";