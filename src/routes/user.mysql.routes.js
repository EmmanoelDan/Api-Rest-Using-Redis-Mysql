const {Router} = require('express');
const {getUsers, createUser, userLogin} = require('../controllers/userControllerMysql');

const mysqlRoutes = Router();

mysqlRoutes.get('/users', getUsers);

mysqlRoutes.post('/users', createUser);

mysqlRoutes.post('/users/login', userLogin);

module.exports = mysqlRoutes;