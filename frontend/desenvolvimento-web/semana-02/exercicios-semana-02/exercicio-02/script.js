let area1 = document.querySelector("#area1");
let area2 = document.querySelector("#area2");

area1.addEventListener("mousedown", mDown);
area1.addEventListener("mouseup", mUp);

function mDown() {
  area1.style.backgroundColor = "#1ec5e5";
  area1.innerHTML = "Solte-me!";
}

function mUp() {
  area1.style.backgroundColor = "#f04028";
  area1.innerHTML = "Clique em mim!";
}

area2.addEventListener("mouseover", mOver);
area2.addEventListener("mouseout", mOut);

function mOver() {
  area2.innerHTML = "Obrigado!";
}

function mOut() {
  area2.innerHTML = "Passe o Mouse!";
}
