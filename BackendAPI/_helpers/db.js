const { Pool } = require('pg');

// const pool = new Pool({
//     user: process.env.PGUSER,
//     host: process.env.PGHOST,
//     database: 'VietnamPCI',
//     password: process.env.PGPASSWORD,
// });

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'VietnamPCI',
//     password: 'ihateme245',
// });

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: 'VietnamPCI',
    password: process.env.PGPASSWORD,
});
function query(param){
    return pool.query(param, res => {
        console.log(res.row)
        res.row});
}
module.exports = query;
//pool.connect();