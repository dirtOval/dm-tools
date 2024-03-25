const biomes = require('../../public/database/controllers/biomes.js');
const db = require('../../public/database/db.js').db;

console.log(biomes.getAllBiomes());
biomes.addBiome('tree zone');

const treeFinder = db.prepare(`SELECT * FROM biomes WHERE name='tree zone'`);
console.log(treeFinder.get());