import db from '_helpers/db';

modules.export={
    getAll,
    getByID
}
async function getAll() {
    return await db.query('Select * from provinces');
}
async function getByID({id, year}) {
    return await db.query(`Select * from provinces where id=${id}`);
}