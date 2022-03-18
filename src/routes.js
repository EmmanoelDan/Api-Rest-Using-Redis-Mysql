const {Router} = require('express');
const routes = Router();

const {createUser, userLogin} = require('./controllers/createUserController');
const {getUsers} = require('./controllers/getUsersController')


routes.get('/users', getUsers)

routes.post('/users', createUser);

routes.post('/users/login', userLogin)


module.exports = routes;
