const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    getAll,
    findBy,
    findById
};

async function insert(user) {
    const [id] = await db('users').insert(user, 'id');
    return findById(id);
};

function getAll() {
    return db('users').select('id', 'username', 'password');
};

function findBy(filter) {
    return db('users')
        .where(filter);
};

function findById(id) {
    return db('users')
        .where({ id })
        .first();
};


