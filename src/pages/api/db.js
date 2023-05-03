import { Pool } from "pg";

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_NAME,
    password: process.env.PG_PWD,
    port: process.env.PG_PORT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};