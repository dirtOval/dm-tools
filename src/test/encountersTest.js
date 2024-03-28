const encounters = require('../../public/database/controllers/encounters.js');
const db = require('../../public/database/db.js').db;

const newEncounters = [
  {
    name: 'scary monkey',
    description: 'a monkey and hes rly scary',
    order: 1,
    biomeid: 1
  },
  {
    name: 'nice monkey',
    description: 'a monkey and hes rly nice',
    order: 2,
    biomeid: 1
  },
  {
    name: 'average monkey',
    description: 'a monkey and hes nondescript',
    order: 3,
    biomeid: 1
  }
]

console.log(encounters.getEncountersByBiome(1));
for (let encounter of newEncounters) {
  encounters.addEncounter(encounter);
}
console.log(encounters.getEncountersByBiome(1));
const changedMonkey = {
  id: 1,
  name: 'reformed monkey',
  description: 'a monkey and hes nice now',
  order: 1,
  biomeid: 1
}
encounters.updateEncounter(changedMonkey);
console.log(encounters.getEncountersByBiome(1));
encounters.deleteEncounter(3);
console.log(encounters.getEncountersByBiome(1));

// const oneMonkey = {
//   name: 'average monkey',
//   description: 'a monkey and hes nondescript',
//   order: 3,
//   biomeid: 1
// };
// encounters.addEncounter(oneMonkey);
// console.log(encounters.getEncountersByBiome(1));