const db = require('../db.js').db;

//get encounters by biome
const getEncountersByBiome = (id) => {
  try {
    const getQuery = db.prepare(`
      SELECT * FROM encounters
      WHERE biomeid = ${id}
    `);
    const encounterList = getQuery.all();
    return encounterList;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

//add encounter
const addEncounter = (encounter) => {
  try {
    const insertQuery = db.prepare(
      `INSERT INTO encounters (name, description, "order", biomeid)
       VALUES ('${encounter.name}', '${encounter.description}', ${encounter.order}, ${encounter.biomeid})`
    );
    const transaction = db.transaction(() => {
      const info = insertQuery.run();
      console.log(`inserted encounter #${info.lastInsertRowid} into encounters`);
    });
    transaction();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

//duplicate encounter -- don't need this. nothing gets saved till user hits save, so this
//can be dealt with client side.

//update encounter
const updateEncounter = (encounter) => {
  try {
    const updateQuery = db.prepare(`
      UPDATE encounters
      SET name = '${encounter.name}',
          description = '${encounter.description}',
          "order" = ${encounter.order},
          biomeid = ${encounter.biomeid}
      WHERE id = ${encounter.id}
    `);
    const transaction = db.transaction(() => {
      const info = updateQuery.run();
      console.log(`Updated encounter #${encounter.id}.`)
    });
    transaction();
  } catch (err) {
    console.error(err);
    throw err;
  }
};


//delete encounter
const deleteEncounter = (id) => {
  try {
    const deleteQuery = db.prepare(`
      DELETE FROM encounters
      WHERE id = ${id}
    `);
    const transaction = db.transaction(() => {
      const info = deleteQuery.run();
      console.log(`Deleted encounter #${id}`);
    });
    transaction();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  getEncountersByBiome,
  addEncounter,
  updateEncounter,
  deleteEncounter
};