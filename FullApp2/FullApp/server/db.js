const Pool = require("pg").Pool;

/*const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "4353"
});*/

const pool = new Pool({
  user:"postgres",
  password: "vovinam24",
  host: "localhost",
  port: 5432,
  database: "postgresData"
});

module.exports = pool;