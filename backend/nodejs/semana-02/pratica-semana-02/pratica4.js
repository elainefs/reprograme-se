const fs = require('fs');

const rawData = fs.readFileSync('dados_pessoas.json');
//USE O MÉTODO JSON.PARSE PARA CONVERTER OS DADOS DO ARQUIVO JSON
const data = JSON.parse(rawData);


console.log(data);