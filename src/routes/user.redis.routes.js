const {Router} = require('express');
const userRedis = require('../controllers/userRedisController')


const redisRouter = Router();

redisRouter.post('/redis', userRedis.userRedisCreate)

redisRouter.post('/redis/login', userRedis.userLogin)

module.exports = redisRouter;

