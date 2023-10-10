const data = [
  {name: 'Rubens', age: 25, salary: 1540, active: true, team: 'backend', bonus: 0},
  {name: 'Raquel', age: 22, salary: 2540, active: false, team: 'frontend', bonus: 0},
  {name: 'Valentina', age: 5, salary: 3540, active: true, team: 'backend', bonus: 0}
];

// O método Find() pecorre todo o array atrás do item desejado e retorna o PRIMEIRO item
// encontrado 
// const users = data.find((item) => {
//   return item.age == 5;
// });
// console.log(users); // {name: 'Valentina', age: 5, salary: 1540, active: true, team: 'backend', bonus: 0,}



// Diferente do Find o Filter retorna Todos que tiverem aquelas específicações
// const users = data.filter((item) => {
//   return item.age > 5;
// });
// console.log(users); // (2) [{…}, {…}]


// Vai verificar se o valor existe e retorna o index
// const users = data.findIndex((item) => {
//   return item.name === 'Rubens';
// });
// const update = data[users].name = 'Rubens Lima';
// console.log(update); // 'Rubens Lima'


// Para cada item faço uma alteração
// const users = data.map((item) => {
//   return 'Olá, ' + item.name;
// });

// console.log(users); // ele cria uma copia modificada do array
// console.log(data); // Ele não modifica o array original

// const users = data.map((item) => {
//   if (item.salary > 3500) {
//     item.salary -= 1000;
//     item.bonus += 1;
//   }

//   return {
//     name: item.name,
//     salary: item.salary,
//     bonus: item.bonus
//   }
// });

// console.log(users.reverse());

// const users = data.some((item) => {
//   return item.active === false;
// });

// console.log(users); // verifica se existe algum active igual a true

// const users = data.every((item) => {
//   return item.active === true;
// });

// console.log(users); // todos os valores precisam ser true para retorna true

const allSalary = data.reduce((all, item) => {
  return all += item.salary;
}, 0);

console.log(allSalary);