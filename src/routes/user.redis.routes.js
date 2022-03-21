const {Router} = require('express');
const {userRedisCreate, userGetRedis} = require('../controllers/userRedisController')


const redisRouter = Router();

redisRouter.post('/redis', userRedisCreate)

redisRouter.get('/redis', userGetRedis)

module.exports = redisRouter;

