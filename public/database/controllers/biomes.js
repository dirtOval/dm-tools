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

module.exports = {
  getAllBiomes,
  addBiome
};