const prompt = require('prompt-sync')();

var placa = prompt('Entre com a placa do carro: ');

var weekday = new Date().getDay(); //OBTEM O DIA DA SEMANA, ONDE 0 É DOMINGO E 6 É SABADO

if(placa.endsWith('1') || placa.endsWith('2')){
  if(weekday != 1){
    console.log('Veículo liberado para circular');
  }else{
    console.log('Veículo proibido de circular');
  }
}else if(placa.endsWith('3') || placa.endsWith('4')/** USE O MÉTODO ENDS.WITH PARA OBTER O FINAL DA PLACA */){
  if(weekday != 2){
    console.log('Veículo liberado para circular');
  }else{
    console.log('Veículo proibido de circular');
  }
}else if(placa.endsWith('5') || placa.endsWith('6')/** USE O MÉTODO ENDS.WITH PARA OBTER O FINAL DA PLACA */){
  if(weekday != 3){
    console.log('Veículo liberado para circular');
  }else{
    console.log('Veículo proibido de circular');
  }
}else if(placa.endsWith('7') || placa.endsWith('8')/** USE O MÉTODO ENDS.WITH PARA OBTER O FINAL DA PLACA */){
  if(weekday != 4){
    console.log('Veículo liberado para circular');
  }else{
    console.log('Veículo proibido de circular');
  }
}else{
  if(weekday != 5){
    console.log('Veículo liberado para circular');
  }else{
    console.log('Veículo proibido de circular');
  }
}
