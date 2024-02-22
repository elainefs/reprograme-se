const sqlite3 = require('sqlite3').verbose();

// Conecta ao banco ou cria o banco como ainda não exista
const db = new sqlite3.Database('escola.sqlite', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Conectado ao banco de dados Escola com sucesso!");

  // Cria tabela alunos
  db.run("CREATE TABLE alunos (matricula int primary key, nome varchar(60), email varchar(40), cidade varchar(60))");
});

// Insere dados na tabela alunos
db.run("INSERT INTO alunos (matricula, nome, email, cidade) values(1, 'João', 'joao@escola.com', 'Vitória')");
db.run("INSERT INTO alunos (matricula, nome, email, cidade) values(2, 'Milena', 'milena@escola.com', 'São Paulo')");
db.run("INSERT INTO alunos (matricula, nome, email, cidade) values(3, 'Elaine', 'elaineferreira.dev@gmail.com', 'Ananindeua')");

// Mostrar dados da tabela alunos no console
db.each('select matricula, nome from alunos', (err, row) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Matrícula: " + row.matricula + " Nome: " + row.nome);
});

