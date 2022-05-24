const {
  employees,
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees.find((employee) => employee.id === id).responsibleFor[0];
  const speciesResidents = species.find((specie) => specie.id === firstSpecie).residents;
  const olderAnimal = speciesResidents.reduce((acc, animal) => (
    acc.age > animal.age ? acc : animal
  ), 0);
  return [olderAnimal.name, olderAnimal.sex, olderAnimal.age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
