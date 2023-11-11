let btnHTML = document.getElementById("btnHTML");
let btnCSS = document.getElementById("btnCSS");
let btnJS = document.getElementById("btnJS");
let imgTecnologia = document.getElementById("imgTecnologia");

btnHTML.addEventListener("click", imgHTML);
btnCSS.addEventListener("click", imgCSS);
btnJS.addEventListener("click", imgJS);
imgTecnologia.addEventListener("click", imgTodas);

function imgHTML() {
  imgTecnologia.src = "img/html.png";
}

function imgCSS() {
  imgTecnologia.src = "img/css.png";
}

function imgJS() {
  imgTecnologia.src = "img/js.png";
}

function imgTodas() {
  imgTecnologia.src = "img/todas.png";
}
