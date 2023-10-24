const readline = require("node:readline");

const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

const tasks = [];
let id = 0;

function addTask(task) {
  if (!task) {
    console.log("\nPor favor digite um ID válido!");
  } else {
    id += 1;
    tasks.push({ id, task });
    console.log(`\nA tarefa "${task}" foi adicionada!\n`);
  }
}

function editTask() {
  return;
}

function removeTask(task) {
  if (typeof valor !== "number" || isNaN(task)) {
    console.log("\nPor favor digite um ID válido!");
  } else {
    const indiceTask = tasks.findIndex((item) => item.id === task);
    tasks.splice(indiceTask, 1);
    console.log(tasks);
  }
}

function listTask() {
  console.log(`Lista de tarefas: `);
  for (let key in tasks) {
    console.log(tasks[key]);
  }
  console.log(`\n`);
}

function viewTask(task) {
  if (typeof valor !== "number" || isNaN(task)) {
    console.log("\nPor favor digite um ID válido!");
  } else {
    const visualation = tasks.find((item) => item.id === parseInt(task));
    console.log(visualation, "\n");
  }
}

function close() {
  return rl.close();
}

function interation() {
  rl.question(
    `Escolha uma das opções abaixo: 
    1 - Adiconar tarefa 
    2 - Editar tarefa 
    3 - Remover tarefa 
    4 - Listar tarefas 
    5 - Visualizar tarefa 
    6 - Encerrar\n`,
    (answer) => {
      if (answer === "1") {
        rl.question("\nAdicione uma nova tarefa: ", (task) => {
          addTask(task);
          interation();
        });
      } else if (answer === "2") {
        console.log("\nDigite o ID da tarefas para editar: ");
      } else if (answer === "3") {
        rl.question("\nDigite o ID da tarefa que deseja remover: ", (task) => {
          removeTask(task);
          interation();
        });
      } else if (answer === "4") {
        listTask();
        interation();
      } else if (answer === "5") {
        rl.question("\nDigite o ID da tarefas para visualizar: ", (task) => {
          viewTask(task);
          interation();
        });
      } else if (answer === "6") {
        console.log("Encerrando o programa!");
        close();
      }
    }
  );
}

interation();
