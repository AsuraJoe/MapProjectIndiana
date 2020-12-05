const { Pool } = require('pg')

const Pool = require('pg')

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: 'VietnamPCI',
    password: process.env.PGPASSWORD,
});

pool.connect();