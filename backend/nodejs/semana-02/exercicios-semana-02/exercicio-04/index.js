const fs = require("fs");

function addTask(...task) {
  let newTask = JSON.stringify(task);
  fs.writeFile("tasks.json", newTask, (error) => {
    if(error) {
      throw error;
    } else {
      console.log("Escreveu com sucesso!");
    }
  });
}

addTask("Tarefa 1", "Tarefa 2");

function readTasks() {
  fs.readFile("tasks.json", "utf-8", (error, dados) => {
    if (error) {
      throw error;
    } else {
      let list = JSON.parse(dados);
      console.log(list);
    }
  });
}

readTasks();
