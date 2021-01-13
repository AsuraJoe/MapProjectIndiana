// require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'VietnamPCI',
    password: 'ihateme245',
});

// const pool = new Pool({
//     user: process.env.PGUSER,
//     host: process.env.PGHOST,
//     database: 'VietnamPCI',
//     password: process.env.PGPASSWORD,
// });
module.exports={
    getAll,
    getByYearID
}

function getAll() {
    return queryData('Select * from pci_data');
}

function getByYearID(id, year) {
    console.log(id, year)
    return queryData(`Select * from pci_data where province=${id} 
    and data_year=${year}`);
}

async function queryData(param){
    const data =  await pool.query(param);
    return data.rows
}