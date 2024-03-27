const biomes = require('../../public/database/controllers/biomes.js');
const db = require('../../public/database/db.js').db;

// console.log(biomes.getAllBiomes());
// biomes.addBiome('tree zone');
// biomes.addBiome('doublezone');

// const treeFinder = db.prepare(`SELECT * FROM biomes WHERE name='tree zone'`);
// console.log(treeFinder.get());

// biomes.duplicateBiome(5);
// console.log(biomes.getAllBiomes());

biomes.addBiome('giraffe world');
console.log(biomes.getAllBiomes());
biomes.updateBiome({
  id: 7,
  name: 'zebra zone',
  color: 'magenta',
  rows: 11,
  frequency: 2,
  die1: 6,
  die2: 6,
  threshold: 10,
  locked: 1
});
console.log(biomes.getAllBiomes());
// const treeFinder = db.prepare(`SELECT * FROM biomes WHERE name='tree zone'`);
// biomes.updateBiome()