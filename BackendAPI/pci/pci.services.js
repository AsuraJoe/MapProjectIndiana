import db from '_helpers/db';

modules.export={
    getAll,
    getByYearID
}
async function getAll() {
    return await db.query('Select * from pci_data');
}
async function getByYearID({id, year}) {
    return await db.query(`Select * from pci_data where id=${id} 
    and year=${year}`);
}