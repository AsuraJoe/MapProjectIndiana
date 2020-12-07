
const {Pool} = require('pg')

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: 'VietnamPCI',
    password: process.env.PGPASSWORD,
});

pool.connect()
.then(
    client => {
        return client
          .query('SELECT * From provinces', [1])
          .then(res => {
            client.release()
            console.log(res.rows[0])
          })
          .catch(err => {
            client.release()
            console.log(err.stack)
          })
      })
