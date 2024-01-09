const prompt = require('prompt-sync')();
const axios = require('./api.js');

async function cadastrarTarefa(){

  var id = Number(prompt('Digite o ID da tarefa: '));
  var descricao = prompt('Digite a descrição da tarefa: ');

  try{
    /** inclua aqui o método post */
    await axios.api.post('/tarefas', {
      id: id,
      descricao: descricao,
      status: 'Pendente'
    });

    console.log('Tarefa casastrada com sucesso!');
  }catch(erro){
    console.log('Erro ao cadastrar tarefa: ', erro.message);
  }
}

async function alterarTarefa(){

  var id = Number(prompt('Digite o ID da tarefa que será alterada: '));
  var descricao = prompt('Digite a nova descrição para a tarefa: ');

  try{
    /** inclua aqui o método put */
    await axios.api.put(`/tarefas/${id}`, {
      id: id,
      descricao: descricao,
      status: 'Pendente'
    });

    console.log('Tarefa alterada com sucesso!');
  }catch(erro){
    console.log('Erro ao alterar tarefa: ', erro.message);
  }

}

async function marcarTarefaConcluida(){

  var id = Number(prompt('Digite o ID da tarefa que será concluída: '));

  var tarefa = await obterTarefa(id);

  try{
    /** inclua aqui o método put */
    await axios.api.put(`/tarefas/${id}`, {
      id: id,
      descricao: tarefa.descricao,
      status: 'Concluída'
    });

    console.log('Tarefa concluída com sucesso!');
  }catch(erro){
    console.log('Erro ao concluir tarefa: ', erro.message);
  }
}

async function excluirTarefa(){

  var id = Number(prompt('Digite o ID da tarefa que será excluída: '));

  try{
    /** inclua aqui o método delete */
    await axios.api.delete(`/tarefas/${id}`);

    console.log('Tarefa excluída com sucesso!');
  }catch(erro){
    console.log('Erro ao excluir tarefa: ', erro.message);
  }
}

async function listarTarefasPendentes(){

  try{
    /** inclua aqui o método get */
    var response = await axios.api.get('/tarefas');
    var lista = response.data.filter((item) => item.status === 'Pendente');

    console.table(lista);
  }catch(erro){
    console.log('Ocorreu um erro ao obter tarefas');
  }

}

async function listarTarefasConcluidas(){
  try{
    /** inclua aqui o método get */
    var response = await axios.api.get('/tarefas');
    var lista = response.data.filter((item) => item.status === 'Concluída');

    console.table(lista);
  }catch(erro){
    console.log('Ocorreu um erro ao obter tarefas');
  }
}

async function obterTarefa(id){
  /** inclua aqui o método get */
  var response = await axios.api.get(`/tarefas/${id}`);

  var tarefa = response.data;

  return tarefa;

}

async function main(){

  console.log('Bem-vindo ao sistema de gerenciamento de tarefas');

  do{

    var op;
    console.log(`O que você quer fazer?
    `);

    console.log('1 - Cadastrar nova tarefa');
    console.log('2 - Alterar uma tarefa');
    console.log('3 - Marcar tarefa como concluída');
    console.log('4 - Excluir uma tarefa');
    console.log('5 - Listar tarefas pendentes');
    console.log('6 - Listar tarefas concluídas');
    console.log(`0 - Sair do sistema
    `);

    op = prompt('Digite sua opção: ');

    switch(op){
      case '1':
        await cadastrarTarefa();
        prompt('Enter para continuar...');
        console.clear();
        break;
      case '2':
        await alterarTarefa();
        prompt('Enter para continuar...');
        console.clear();
        break;
      case '3':
        await marcarTarefaConcluida();
        prompt('Enter para continuar...');
        console.clear();
        break;
      case '4':
        await excluirTarefa();
        prompt('Enter para continuar...');
        console.clear();
        break;
      case '5':
        await listarTarefasPendentes();
        prompt('Enter para continuar...');
        console.clear();
        break;
      case '6':
        await listarTarefasConcluidas();
        prompt('Enter para continuar...');
        console.clear();
        break;
      case '0':
        console.log('Obrigado por usar o sistema. Até mais!');
        break;
      default:
        console.log('Entrada inválida');
        prompt('Enter para continuar...');
    }
  }while(op !== '0');
}

main();