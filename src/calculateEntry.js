// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
// Feito com a ajuda das alunas Cristiane, Aparecida, Rafaela, e Camila. Turma 16 Tribo A.
const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) result.child += 1;
    if (person.age >= 18 && person.age < 50) result.adult += 1;
    if (person.age >= 50) result.senior += 1;
  });
  return result;
}

function parameterIsArray(entrants) {
  if (Array.isArray(entrants) && entrants.length > 0) {
    return countEntrants(entrants);
  }
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const verifyParameter = parameterIsArray(entrants);
  const sumAllOfThePrices = ((verifyParameter.child * prices.child)
  + (verifyParameter.adult * prices.adult)
  + (verifyParameter.senior * prices.senior));
  return sumAllOfThePrices;
}

module.exports = { calculateEntry, countEntrants };
