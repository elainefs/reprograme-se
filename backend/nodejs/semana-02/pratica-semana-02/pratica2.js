const prompt = require('prompt-sync')();

var data = prompt('Entre com a data: ');

//USE O MÉTODO SPLIT PARA OBTER OS DADOS DA DATA SEPARADAMENTE
var [dia, mes, ano] = data.split("/");

switch(mes){
  case '01': 
    mes = 'janeiro';
    break;
  case '02':
    mes = 'fevereiro';
    break;
  case '03':
    mes = 'março';
    break;
  case '04':
    mes = 'abril';
    break;
  case '05':
    mes = 'maio';
    break;
  case '06':
    mes = 'junho';
    break;
  case '07':
    mes = 'julho';
    break;
  case '08':
    mes = 'agosto';
    break;
  case '09':
    mes = 'setembro';
    break;
  case '10':
    mes = 'outubro';
    break;
  case '11':
    mes = 'novembro';
    break;
  case '12':
    mes = 'dezembro';
    break;
}

console.log(`${dia} de ${mes} de ${ano}`);

