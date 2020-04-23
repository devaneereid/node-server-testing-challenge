const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    getAll,
};

async function insert(user) {
    return db('users').insert(user, 'id');
};

function getAll() {
    return db('users');
};



