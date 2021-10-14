const {
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

// 1. Implemente a função getSpeciesByIds
// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.
// Observações técnicas

// O parâmetro desta função pode ser alterado para atender ao requisito proposto.
// O que será avaliado:

// Caso receba nenhum parâmetro, necessário retornar um array vazio;
// Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
// Ao receber mais de um id, retorna um array com as espécies referentes aos ids.
function getSpeciesByIds(...ids) {
  const arrObject = [];
  if (!ids.length) {
    return arrObject;
  }
  species.forEach((specie) => {
    ids.forEach((id) => {
      if (specie.id === id) {
        arrObject.push(specie);
      }
    });
  });
  return arrObject;
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
