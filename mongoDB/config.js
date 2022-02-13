require("dotenv").config();

const { MDB_PW, MDB_DB } = process.env;

if (!MDB_PW || !MDB_DB) {
  console.error(`Database password or database name missing.`);
}

const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://auth_user:${MDB_PW}@cluster0.uf9sm.mongodb.net/${MDB_DB}?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

const db = mongoose.connection;

module.exports = db;
