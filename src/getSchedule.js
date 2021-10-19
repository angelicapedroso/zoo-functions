const data = require('../data/zoo_data');
const {
  species,
  hours,
} = require('../data/zoo_data');

const daysOfTheWeek = Object.keys(hours);
const nameOfSpecies = species.reduce((result, specie) => {
  result.push(specie.name);
  return result;
}, []);

function allShedule() {
  const all = {};

  daysOfTheWeek.forEach((day) => {
    const messageOfficeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    const nameOfTheAnimals = species.reduce((acc, curr) => {
      if (curr.availability.includes(day)) acc.push(curr.name);
      return acc;
    }, []);
    all[day] = {
      officeHour: messageOfficeHour,
      exhibition: nameOfTheAnimals,
    };
  });
  all.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return all;
}

const getAllShedule = allShedule();

function getSchedule(scheduleTarget) {
  if (daysOfTheWeek.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: getAllShedule[scheduleTarget],
    };
  }
  if (nameOfSpecies.includes(scheduleTarget)) {
    return species.find((specie) => (
      specie.name === scheduleTarget)).availability;
  }
  return allShedule();
}

console.log(getSchedule('lions'));

module.exports = getSchedule;

// Feito com ajuda das colegas Cristiane e Rafaela;
