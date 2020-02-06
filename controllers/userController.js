const users = require('../models/Users');

module.exports = {
    getAllUsers: (req, res) => {
        res.json(users);
    },
    getUserById: (req, res) => {
        res.json('getUserById');
    },
    createUser: (req, res) => {
        res.json('createUser');
    },
    updateUser: (req, res) => {
        res.json('updateUser');
    },
    deleteUser: (req, res) => {
        res.json('deleteUser');
    }
};