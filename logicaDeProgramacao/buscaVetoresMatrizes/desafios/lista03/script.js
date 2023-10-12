// Para resolver esse problema, crie uma função chamada montarNomesCompletos que deve:

// 1. Receber um array de objetos onde cada objeto seja composto pelos atributos primeiroNome, segundoNome e terceiroNome.

// 2. Retornar um array nos quais os objetos tenham apenas os atributos nome e idade.

// 3. Esse novo atributo idade deve ser a junção dos antigos atributos primeiroNome, segundoNome e terceiroNome.

// 4. Utilize for...in no seu desenvolvimento.

const usuarios = [
  {
    primeiroNome: "Antonio",
    segundoNome: "Freitas",
    terceiroNome: "Oliveira",
    age: 35,
  },
  {
    primeiroNome: "Manuel",
    segundoNome: "Guedes",
    terceiroNome: "Peixoto",
    age: 23,
  },
];

function montarNomesCompletos(usuarios) {
  for (i in usuarios) {
    usuarios[i].name =
      usuarios[i].primeiroNome +
      " " +
      usuarios[i].segundoNome +
      " " +
      usuarios[i].terceiroNome;

    usuarios[i].age = usuarios[i].age;

    delete usuarios[i].primeiroNome;
    delete usuarios[i].segundoNome;
    delete usuarios[i].terceiroNome;
  }

  return usuarios;
}

const result = montarNomesCompletos(usuarios);
console.log(result);

// function montarNomesCompletos(usuarios) {
//   const novosUsuarios = [];

//   for (let i = 0; i < usuarios.length; i++) {
//     const usuario = usuarios[i];
//     const nomeCompleto = [];

//     for (let index in usuario) {
//       if (index !== "age") {
//         nomeCompleto.push(usuario[index]);
//       }
//     }

//     novosUsuarios.push({
//       name: nomeCompleto.join(" "),
//       age: usuario.age,
//     });
//   }

//   return novosUsuarios;
// }

// const result = montarNomesCompletos(usuarios);
// console.log(result);
