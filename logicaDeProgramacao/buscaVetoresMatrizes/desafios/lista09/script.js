const folgas = [
  "quinta-Feira",
  "Sexta-feira",
  "sábado",
  "Domingo",
  "segunda",
  "quarta",
  "Quarta-feira",
];

function capitalizeFolgas(folgas) {
  let caracteres = "";
  const novaString = [];

  caracteres = folgas.map(function (elemento) {
    caracteres = elemento.split("");

    caracteres[0] = caracteres[0].toUpperCase();

    novaString.push(caracteres.join(""));
  });
  return novaString;
}

const resultado = capitalizeFolgas(folgas);
console.log(resultado);

// function capitalizeFolgas(folgas) {
//   let caracteres = "";
//   let novaString = [];

//   for (let i = 0; i < folgas.length; i++) {
//     caracteres = folgas[i].split("");

//     caracteres[0] = caracteres[0].toUpperCase();

//     novaString.push(caracteres.join(""));
//   }
//   console.log(novaString);
// }

// const resultado = capitalizeFolgas(folgas);
// console.log(resultado);
