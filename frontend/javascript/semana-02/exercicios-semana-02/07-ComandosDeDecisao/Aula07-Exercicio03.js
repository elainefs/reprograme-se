prompt = require("prompt-sync")();

compra = parseFloat(prompt("Digite o valor da compra em (R$): "));

if (compra <= 1000){
  desconto = compra * 5 / 100;
}else if ((compra > 1000) && (compra <= 5000)){
  desconto = compra * 10 / 100;
}else{
  desconto = compra * 15 / 100;
}
   
console.log("O valor do desconto: R$ " , desconto);

