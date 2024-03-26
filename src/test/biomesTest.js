const biomes = require('../../public/database/controllers/biomes.js');
const db = require('../../public/database/db.js').db;

console.log(biomes.getAllBiomes());
// biomes.addBiome('tree zone');
biomes.addBiome('doublezone');

// const treeFinder = db.prepare(`SELECT * FROM biomes WHERE name='tree zone'`);
// console.log(treeFinder.get());

biomes.duplicateBiome(5);
console.log(biomes.getAllBiomes());