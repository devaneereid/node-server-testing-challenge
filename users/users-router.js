const router = require('express').Router();

const Users = require('./users-model.js');

// GET - ALL Users
router.get('/', (req, res) => {
    console.log('token', req.decodedToken);
    Users.getAll()
        .then(users => {
            res.json(users);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
});

module.exports = router;