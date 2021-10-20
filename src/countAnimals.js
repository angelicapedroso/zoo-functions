const {
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, value) => {
      acc[value.name] = value.residents.length;
      return acc;
    }, {});
  }
  if (!animal.sex) {
    return species.find((valueSpecie) =>
      valueSpecie.name === animal.specie).residents.length;
  }
  return species.find((valueSpecie) =>
    valueSpecie.name === animal.specie).residents
    .filter((valueSex) => valueSex.sex === animal.sex).length;
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
