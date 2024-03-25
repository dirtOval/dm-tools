process.env.NODE_ENV= "development"

const Database = require("better-sqlite3");
const path = require("path");

const dbPath =
    process.env.NODE_ENV === "development"
        ? "./dmStuff.db"
        : path.join(process.resourcesPath, "./dmStuff.db")

const db = new Database(dbPath, {verbose: console.log});
db.pragma("journal_mode = WAL")

//schema time 8)
const biome = `CREATE TABLE IF NOT EXISTS biomes ("id" INTEGER NOT NULL PRIMARY KEY, 
                                                  "name" VARCHAR(30) NOT NULL,
                                                  "color" VARCHAR(15) NOT NULL,
                                                  "rows" INTEGER NOT NULL,
                                                  "frequency" INTEGER NOT NULL,
                                                  "die1" INTEGER NOT NULL,
                                                  "die2" INTEGER NOT NULL,
                                                  "threshold" INTEGER NOT NULL,
                                                  "locked" INTEGER CHECK (locked = 0 OR locked = 1))`;

const encounter = `CREATE TABLE IF NOT EXISTS encounters ("id" INTEGER NOT NULL PRIMARY KEY,
                                                          "name" VARCHAR(30) NOT NULL,
                                                          "description" VARCHAR(200) NOT NULL,
                                                          "order" INTEGER NOT NULL,
                                                          "biomeid" INTEGER NOT NULL,
                                                          FOREIGN KEY("biomeid") REFERENCES biomes("id"))`

const biomeStatement = db.prepare(biome);
const encounterStatement = db.prepare(encounter);

biomeStatement.run();
encounterStatement.run();

exports.db = db