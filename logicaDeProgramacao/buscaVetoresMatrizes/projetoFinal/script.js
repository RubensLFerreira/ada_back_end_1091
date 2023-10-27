const readline = require("node:readline");

const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

const tasks = [];

function addTask(task) {
  let id = 0;
  if (task) {
    id += 1;
    tasks.push({ id, task });
    console.log(`\nA tarefa "${task}" foi adicionada!\n`);
  } else {
    console.log("\nPor favor digite um ID válido!");
  }
}

function editTask(idTask, newTask) {
  try {
    const taskNumber = Number(idTask);

    if (!isNaN(taskNumber)) {
      const indexTask = tasks.findIndex((item) => item.id === taskNumber);
      tasks[indexTask].task = newTask;
      console.log(tasks);
    } else {
      console.log("\nErro! Digite um ID válido!\n");
    }
  } catch (error) {
    console.error({ message: error });
  }
}

function removeTask(task) {
  const taskNumber = Number(task);
  if (!isNaN(taskNumber)) {
    const indiceTask = tasks.findIndex((item) => item.id === taskNumber);
    tasks.splice(indiceTask, 1);
    console.log(tasks);
  } else {
    console.log("\nPor favor digite um ID válido!");
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
  const taskNumber = Number(task);
  if (!isNaN(taskNumber)) {
    const visualation = tasks.find((item) => item.id === taskNumber);
    console.log(visualation, "\n");
  } else {
    console.log("\nPor favor digite um ID válido!");
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
        rl.question("\nDigite o ID da tarefas para editar: ", (idTask) => {
          rl.question("\nDigite a nova tarefa: ", (newTask) => {
            editTask(idTask, newTask);
            interation();
          });
        });
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
