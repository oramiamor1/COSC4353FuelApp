const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password: "vovinam24",
    host: "localhost",
    port: 5432,
    database: "postgresData"
});

module.exports = pool;