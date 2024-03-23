const Database = require("better-sqlite3")
const path = require("path")

const dbPath =
    process.env.NODE_ENV === "development"
        ? "./dmTable.db"
        : path.join(process.resourcesPath, "./dmTable.db")

const db = new Database(dbPath, {verbose: console.log});
db.pragma("journal_mode = WAL")

exports.db = db