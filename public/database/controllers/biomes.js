const db = require('../db.js').db;

const getAllBiomes = () => {
  try {
    const query = 'SELECT * FROM biomes';
    const readQuery = db.prepare(query);
    const rowList = readQuery.all();
    return rowList;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

//you forgot the get biome by iddddd
//wait do i actually need this? let's think about this first.

const addBiome = (name) => {
  try {
    const insertQuery = db.prepare(
      `INSERT INTO biomes (name, color, rows, frequency, die1, die2, threshold, locked)
       VALUES ('${name}', 'green', 18, 1, 12, 8, 18, 0)`
    );
    const transaction = db.transaction(() => {
      const info = insertQuery.run();
      console.log(`Inserted ${info.changes} rows with last ID ${info.lastInsertRowid} into biomes`);
    });
    transaction();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

//duplicate biome
const duplicateBiome = (id) => {
  try {
    const dupeQuery = db.prepare(`
    INSERT INTO biomes (name, color, rows, frequency, die1, die2, threshold, locked)
    SELECT name || '(copy)', color, rows, frequency, die1, die2, threshold, locked
    FROM biomes WHERE id=${id}
    `);
    const transaction = db.transaction(() => {
      const info = dupeQuery.run();
      console.log(`Duplicated biome #${id}, new id is ${info.lastInsertRowId}.`);
    });
    transaction();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

//update biome
//okay time to make a decision about how this data gets passed to the db
//ideally it gets sent back the same way. this might be subject to change

const updateBiome = (biome) => {
  try {
    const updateQuery = db.prepare(`
      UPDATE biomes
      SET name = '${biome.name}',
          color = '${biome.color}',
          rows = ${biome.rows},
          frequency = ${biome.frequency},
          die1 = ${biome.die1},
          die2 = ${biome.die2},
          threshold = ${biome.threshold},
          locked = ${biome.locked}
      WHERE id = ${biome.id}
    `);
    const transaction = db.transaction(() => {
      const info = updateQuery.run();
      console.log(`Updated biome #${biome.id}.`)
    });
    transaction();
  } catch (err) {
    console.error(err);
    throw err;
  }
};


//delete biome
const deleteBiome = (id) => {
  try {
    const deleteQuery = db.prepare(`
      DELETE FROM biomes
      WHERE id = ${id}
    `);
    const transaction = db.transaction(() => {
      const info = deleteQuery.run();
      console.log(`Deleted biome #${id}`);
    });
    transaction();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  getAllBiomes,
  addBiome,
  duplicateBiome,
  updateBiome,
  deleteBiome
};