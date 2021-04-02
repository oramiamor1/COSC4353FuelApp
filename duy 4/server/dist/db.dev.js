"use strict";

var Pool = require("pg").Pool;

var pool = new Pool({
  user: "postgres",
  password: "vovinam24",
  host: "localhost",
  port: 5432,
  database: "postgresData"
});
module.exports = pool;